import React, { useState, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import StatBox from './StatBox'

import abilityScores from '../../data/generalData/abilityScores'

const This = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
`

const AbilityScoreBox = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const AbilityScoreTitle = styled.div`
  flex-grow: 1;

  padding: 5px;

  text-align: center;
  font-weight: bold;
`

const AbilityScores = (props) => {
  const {
    abilityScores: creatureAbilityScores,
  } = props

  const [isShowingModifier, setIsShowingModifier] = useState(true)

  return (
    <This
      className="abilityScores"
    >
      <AbilityScoreTitle>
        {
          isShowingModifier
            ? "Modifiers"
            : "Ability Scores"
        }
      </AbilityScoreTitle>
      
      <AbilityScoreBox
        onClick={() => setIsShowingModifier(!isShowingModifier)}
      >
        {_.map(abilityScores, abilityScore => (
          <StatBox
            borderColor={abilityScore.color}
            key={abilityScore.shortName}
            label={abilityScore.shortName}
            value={isShowingModifier
              ? creatureAbilityScores[abilityScore.fullName].modifier
              : creatureAbilityScores[abilityScore.fullName].score
            }
          />
        ))
        }
      </AbilityScoreBox>
    </This>
  )
}

export default AbilityScores