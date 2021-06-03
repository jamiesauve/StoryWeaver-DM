import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Heading from '../UI/Structure/Heading'
import ColoredBox from '../UI/Style/ColoredBox'

import HarvestingEntry from './HarvestingEntry'

import { useRecoilValue } from 'recoil'
import {
  colorsAtom,
} from '../../state/atoms/staticDataAtoms'
import theme from '../../data/styles/theme'

const This = styled.div`
font-size: ${theme.smallTextSize}
`

const Harvesting = (props) => {
  const {
    reagent,
  } = props
  
  const colors = useRecoilValue(colorsAtom)
  
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