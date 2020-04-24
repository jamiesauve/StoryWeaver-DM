import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'

import Dresser from '../Components/UI/Dresser'

import ScrollableContainer from '../Components/styled/ScrollableContainer'

import ReagentDisplayCard from '../Components/DisplayCards/ReagentDisplayCard'

import reagents from '../data/reagents'
import colors from '../data/colors'

const This = styled.div``

const Alchemy = (props) => {
  const reagentsByTerrain = _.filter(reagents, reagent => 
    _.isEmpty(reagent.terrain)
    ? true
    : _.includes(reagent.terrain, props.activeTerrain)
  )

  const drawers = reagentsByTerrain
  .map(reagent => ({
    title: reagent.label,
    titleColor: colors.forestGreen,
    content: () => <ReagentDisplayCard
      data={reagent}
    />,
  }))

  return (
    <This>
      <Section
        className="alchemy"
        title="Alchemy"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <Dresser 
            drawers={drawers}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Alchemy