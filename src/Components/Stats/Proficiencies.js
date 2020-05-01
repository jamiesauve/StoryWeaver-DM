import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import BulletList from './BulletList'
import DoubleBulletList from './DoubleBulletList'

import colors from '../../data/colors'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Proficiencies = (props) => {
  const {
    data: proficiencies,
  } = props

  const allProficiencies = _.map(proficiencies, proficiency => 
    `${proficiency.type === `saving throw` ? `${proficiency.shortForm} Saves` : proficiency.name} ${proficiency.value ? `: ${proficiency.value}` : ``}`)  // split into two bulletlists

  return (
    <This
      className="proficiencies"
    >
      {allProficiencies.length > 1
        ? <DoubleBulletList
        borderColor={colors.jungleGreen}
        items={allProficiencies}
        heading="Proficiencies"
      />
      : <BulletList
      borderColor={colors.jungleGreen}
      items={allProficiencies}
      heading="Proficiencies"
    />
      }
    </This>
  )
}

export default Proficiencies