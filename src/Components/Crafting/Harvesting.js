import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ColoredBox from '../UI/Style/ColoredBox'

import HarvestingEntry from './HarvestingEntry'

import colors from '../../data/styles/colors'
import sizes from '../../data/styles/sizes'

const This = styled.div`
  font-size: ${sizes.small}
`

const Heading = styled.div`
  align-self: center;

  font-weight: bold;
  font-size: ${sizes.small};
`

const Harvesting = (props) => {
  const {
    reagent,
  } = props

  return (
    <This>
      <ColoredBox
        color={colors.puzzleOrange}
      >
        <Heading>
          Harvesting
        </Heading>

        {_.map(reagent, harvestingEntry => (
          <HarvestingEntry
            harvestingEntry={harvestingEntry}
            key={harvestingEntry.reagentPart.name}      
          />
        ))}
      </ColoredBox>
    </This>
  )
}

export default Harvesting