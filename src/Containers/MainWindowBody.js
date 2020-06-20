import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { DragDropContext } from 'react-beautiful-dnd'

import AspectSlot from '../Components/MainWindow/AspectSlot'

import initialAspectsArray from '../utils/getAspectsAsArray'

const This = styled.div`
display: flex;
flex-direction: row;
justify-content: stretch;

flex-grow: 1;
`

const MainWindowBody = (props) => {
  const {
    windowHeight
  } = props

  const [numberOfAspectSlots, /*setNumberOfAspectSlots*/] = useState(5)
  const [aspectSlots, setAspectSlots] = useState()

  const [currentPositionsArray, setCurrentPositionsArray] = useState([]) // use this for tracking positions. Looks like:

// [
//   ['notes', 'ambiences'],
//   ['crafting', 'gameplay']
//   ...
// ]

  useEffect(() => {
    const initialPositionsArray = _.reduce(initialAspectsArray, (aggr, aspect) => {
      if (!aggr[aspect.defaultSlot]) aggr[aspect.defaultSlot] = []
      aggr[aspect.defaultSlot][aspect.defaultIndex] = aspect.name

      return aggr
    }, [])
    setCurrentPositionsArray(initialPositionsArray)
  }, [
    initialAspectsArray,
  ])

  useEffect(() => {
    const currentAspectSlots = populateAspectSlots(currentPositionsArray, initialAspectsArray)

    setAspectSlots(currentAspectSlots)
  }, [
    currentPositionsArray
  ])

  const handleDragEnd = (dragDropObject) => {
    const {
      destination,
      draggableId: nameOfAspectToMove,
      source,
    } = dragDropObject

    if (!destination) return

    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return
    }

    const sourceDroppableId = parseInt(source.droppableId)
    const destinationDroppableId = parseInt(destination.droppableId)

    const newPositionsArray = _.cloneDeep(currentPositionsArray)

    newPositionsArray[sourceDroppableId] = _.filter(
      currentPositionsArray[sourceDroppableId], 
      aspectName => aspectName !== nameOfAspectToMove
    )

    newPositionsArray[destinationDroppableId].splice(
      destination.index, 
      0, 
      nameOfAspectToMove
    )

    setCurrentPositionsArray(newPositionsArray)
  }

  const populateAspectSlots = (currentPositionsArray, initialAspectsArray) => {
    return currentPositionsArray.map((slotPositionsArray, index) => {
      const aspectsArray = _.map(
        slotPositionsArray, 
        aspectName => _.find(initialAspectsArray, {name: aspectName})
      )

      return (
        <AspectSlot
          aspects={aspectsArray}
          aspectSlotId={index}
          key={index}
        />
      )
    })
  }

  return (
    <This
      className="mainWindowBody"
    >
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        {aspectSlots}
      </DragDropContext>
    </This>
  )
}

export default MainWindowBody

// AspectLocationTracker // contains state for which context is where, and also a drag drop context. Maybe those need to be here instead.