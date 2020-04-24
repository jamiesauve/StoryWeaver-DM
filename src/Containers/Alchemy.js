import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import ToggleExpandedButton from '../Components/Layout/ToggleExpandedButton'

import Spacer from '../Components/styled/Spacer'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import ReagentDisplayCard from '../Components/DisplayCards/ReagentDisplayCard'

import reagents from '../data/reagents'

const This = styled.div``

const Alchemy = (props) => {
  const [ areAllReagentsExpanded, setAreAllReagentsExpanded ] = useState(false)

  const reagentsByTerrain = _.filter(reagents, reagent => 
    _.isEmpty(reagent.terrain)
    ? true
    : _.includes(reagent.terrain, props.activeTerrain)
  )

  return (
    <This>
      <Section
        className="alchemy"
        title="Alchemy"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <ToggleExpandedButton 
            areAllReagentsExpanded={areAllReagentsExpanded}
            setAreAllReagentsExpanded={setAreAllReagentsExpanded}
          />

          {
            _.map(reagentsByTerrain, reagent => (
              <div
                key={reagent.name}
              >
                <ReagentDisplayCard
                  data={reagent}
                />

                <Spacer />
              </div>
            ))
          }
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Alchemy