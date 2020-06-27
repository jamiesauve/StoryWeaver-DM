import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/UI/Structure/Section'
import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import creatures from '../data/aspectData/creatures/creatures'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Creature = styled.div`
  margin: 5px 0;
`

const Creatures = (props) => {
  const {
    activeLocation,
  } = props

  const filteredCreatures = !_.isEmpty(activeLocation)
    ? _.filter(creatures, creature => _.includes(creature.terrain, activeLocation.name))
    : creatures

  const filteredCreatureStrings = _.map(filteredCreatures, creature => (
    <Creature>
      {`${creature.label} (${creature.location})`}
    </Creature>
  ))

  return (
    <This>
      <Section
        className="section"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          {filteredCreatureStrings}
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Creatures