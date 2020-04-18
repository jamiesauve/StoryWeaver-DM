import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import PlantDisplayCard from '../Components/DisplayCards/PlantDisplayCard'

import plants from '../data/plants'

const This = styled.div``

const Plants = (props) => {
  const plantsByTerrain = _.filter(plants, plant => 
    _.isEmpty(plant.terrain)
    ? true
    : _.includes(plant.terrain, props.activeTerrain)
  )

  return (
    <This>
      <Section
        className="Plants"
        title="Plants"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          {
            _.map(plantsByTerrain, plant => (
              <>
                <PlantDisplayCard
                  data={plant}
                />

                <Spacer />
              </>
            ))
          }
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Plants