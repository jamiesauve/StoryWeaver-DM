import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import List from './List'

import colors from '../../data/styles/colors'
import ColoredBox from '../UI/ColoredBox'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Proficiencies = (props) => {
  const {
    proficiencies,
  } = props

  const allProficiencies = _.map(proficiencies, proficiency => 
    `${proficiency.type === `saving throw` ? `${proficiency.shortForm} Saves` : proficiency.name} ${proficiency.value ? `: ${proficiency.value}` : ``}`)  // split into two bulletlists

  return (
    <This
      className="proficiencies"
    >
      <ColoredBox
        color={colors.cavesPurple}
      >
        <List
          heading="Proficiencies"
          
          items={allProficiencies}
          numberOfColumns={2}
        />
      </ColoredBox>
    </This>
  )
}

export default Proficiencies