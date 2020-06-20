import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { DragDropContext } from 'react-beautiful-dnd'

import AreTabsContractedContext from '../context/AreTabsContractedContext'

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
  const [areTabsContracted, setAreTabsContracted] = useState(false)
  const [currentPositionsArray, setCurrentPositionsArray] = useState([])

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

  const handleDragStart = () => {
    setAreTabsContracted(true)
  }

  const handleDragEnd = (dragDropObject) => {
    const {
      destination,
      draggableId: nameOfAspectToMove,
      source,
    } = dragDropObject

    setAreTabsContracted(false)

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
      <AreTabsContractedContext.Provider value={areTabsContracted}>
        <DragDropContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {aspectSlots}
        </DragDropContext>
      </AreTabsContractedContext.Provider>
    </This>
  )
}

export default MainWindowBody

// AspectLocationTracker // contains state for which context is where, and also a drag drop context. Maybe those need to be here instead.