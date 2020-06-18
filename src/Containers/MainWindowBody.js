import React, { useState, useEffect, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import AspectSlot from '../Components/MainWindow/AspectSlot'

import aspects from '../utils/getAspectsAsArray'

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
  const [aspectSlots, setAspectSlots] = useState([])

  useEffect(() => {
    if (_.isEmpty(aspectSlots) && !_.isNull(windowHeight)) {
      const aspectSlots = generateAspectSlots(numberOfAspectSlots, aspects)
      setAspectSlots(aspectSlots)
    }
  }, [
    aspectSlots,
    windowHeight,
    numberOfAspectSlots,
  ])

  const generateAspectSlots = (numberOfAspectSlots, aspects) => {
    const aspectsNestedArray = Array(numberOfAspectSlots)
      .fill(null)
      .map(() =>[])

    _.forEach(aspects, aspect => {
      aspectsNestedArray[aspect.defaultAspectSlot].push(aspect)
    })

    return aspectsNestedArray.map((aspectsArray, index) => (
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