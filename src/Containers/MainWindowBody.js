import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { DragDropContext } from 'react-beautiful-dnd'

import {useRecoilState } from 'recoil'

import { areTabsContractedAtom } from '../state/atoms/generalAtoms'

import AspectSlot from '../Components/MainWindow/AspectSlot'

import initialAspectsArray from '../utils/getAspectsAsArray'

const This = styled.div`
display: flex;
flex-direction: row;
justify-content: stretch;

flex-grow: 1;
`

const MainWindowBody = (props) => {
  const [aspectSlots, setAspectSlots] = useState()
  const [, setAreTabsContracted] = useRecoilState(areTabsContractedAtom)
  const [currentTabPositionsArray, setCurrentTabPositionsArray] = useState([])

  useEffect(() => {
    const initialPositionsArray = _.reduce(initialAspectsArray, (aggr, aspect) => {
      if (!aggr[aspect.defaultSlot]) aggr[aspect.defaultSlot] = []
      aggr[aspect.defaultSlot][aspect.defaultIndex] = aspect.name

      return aggr
    }, [])
    setCurrentTabPositionsArray(initialPositionsArray)
  }, [])

  useEffect(() => {
    const currentAspectSlots = populateAspectSlots(currentTabPositionsArray, initialAspectsArray)

    setAspectSlots(currentAspectSlots)
  }, [
    currentTabPositionsArray
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

    const newPositionsArray = _.cloneDeep(currentTabPositionsArray)

    newPositionsArray[sourceDroppableId] = _.filter(
      currentTabPositionsArray[sourceDroppableId], 
      aspectName => aspectName !== nameOfAspectToMove
    )

    newPositionsArray[destinationDroppableId].splice(
      destination.index, 
      0, 
      nameOfAspectToMove
    )

    setCurrentTabPositionsArray(newPositionsArray)
  }

  const populateAspectSlots = (currentTabPositionsArray, initialAspectsArray) => {
    return currentTabPositionsArray.map((slotPositionsArray, index) => {
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
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {aspectSlots}
      </DragDropContext>
    </This>
  )
}

export default MainWindowBody

// AspectLocationTracker // contains state for which context is where, and also a drag drop context. Maybe those need to be here instead.