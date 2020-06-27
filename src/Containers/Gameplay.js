import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/UI/Structure/Section'

import Dresser from '../Components/UI/Structure/Dresser'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import ReagentDisplayCard from '../Components/Stats/DisplayCards/ReagentDisplayCard'

import terrainTypes from '../data/generalData/terrainTypes'
import reagents from '../data/aspectData/crafting/reagents'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Gameplay = (props) => {
  const reagentsByTerrain = _.filter(reagents, reagent => 
    _.isEmpty(reagent.terrain)
    ? true
    : _.includes(reagent.terrain, props.activeLocation)
  )

  const drawers = reagentsByTerrain
  .map(reagent => ({
    title: reagent.label,
    titleColor: _.find(terrainTypes, {name: props.activeLocation}).color,
    content: () => <ReagentDisplayCard
      data={reagent}
    />,
  }))

  return (
    <This
    className="gameplay"
    >
      <Section
        className="section"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <Dresser 
            className="dresser"
            drawers={drawers}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Gameplay