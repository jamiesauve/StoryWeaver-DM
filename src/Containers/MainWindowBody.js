import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import AspectSlot from '../Components/MainWindow/AspectSlot'

import initialApectsArray from '../utils/getAspectsAsArray'

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
  const [updatedAspectsArray, setUpdatedAspectsArray] = useState([])

  useEffect(() => {
    const aspectsArray = _.isEmpty(updatedAspectsArray)
    ? initialApectsArray
    : updatedAspectsArray
    
    setAspectSlots(populateAspectSlots(aspectsArray))
  }, [
    initialApectsArray,
    updatedAspectsArray
  ])

  const populateAspectSlots = (aspectsArray) => {
    const aspectSlots = Array(numberOfAspectSlots).fill(null).map(() => [])

    _.forEach(aspectsArray, aspect => {
      aspectSlots[aspect.defaultAspectSlot].push(aspect)
    })

    return aspectSlots.map((aspectsArray, index) => (
      <AspectSlot
        aspects={aspectsArray}
        aspectSlotId={index}
        key={index}
      />
    ))
  }



  return (
    <This
      className="mainWindowBody"
    >
      
      {aspectSlots}
    </This>
  )
}

export default MainWindowBody

// AspectLocationTracker // contains state for which context is where, and also a drag drop context. Maybe those need to be here instead.