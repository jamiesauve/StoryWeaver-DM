import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Senses from '../Stats/Senses'
import Speed from '../Stats/Speed'
import AbilityScores from '../Stats/AbilityScores'
import Languages from '../Stats/Languages'
import Proficiencies from '../Stats/Proficiencies'
import InlineStat from '../Stats/InlineStat'

import Description from '../Stats/Description'

import restructureData from '../SearchResults/dataRestructuring/creature'

import DisplayCard from '../styled/DisplayCard/Card'
import Row from '../styled/DisplayCard/Row'
import Title from '../styled/DisplayCard/Title'
import TitleDetail from '../styled/DisplayCard/TitleDetail'

import colors from '../../data/colors'

const This = styled.div``

const Filler = styled.div`
  flex-grow: 1;
`

const StatBlock = styled.div`
  display: flex;
  flex-direction: column;

  flex-grow: 0;
  flex-shrink: 0;
`

const StatColumn = styled.div`
  flex-grow: 1;
  
  display: flex;
  flex-direction: columm;
`

const StatCell = styled.div`
  width: 65px;
`

const CreatureDisplayCard = (props) => {
  const creatureData = restructureData(props.data)

  console.log('creatureData', creatureData)

  const {
    label,
    
    abilityScores,
    alignment,
    actions,
    armorClass,
    challengeRating,
    damageImmunities,
    damageResistances,
    damageVulnerabilities,
    hitPoints,
    languages,
    passivePerception,
    proficiencies,
    senses,
    size,
    speed,
    subType,
    type,
  } = creatureData

  return (
    <This>
      <DisplayCard>
        <Row
          padding="0 0 5px 0"
        >
          <Title>
            {label}
          </Title>

          <TitleDetail>
            {size} {type}{subType && ` (${subType})`}, {alignment}
          </TitleDetail>

          <Filler />

          <StatBlock>
            <StatColumn>
              <StatCell>
                <InlineStat 
                  color={colors.battleRed}
                  label={"CR"}
                  value={challengeRating}
                />
              </StatCell>
              
              <StatCell>
                <InlineStat 
                  color={colors.weatherBlue}
                  label={"AC"}
                  value={armorClass}
                />
              </StatCell>
            </StatColumn>

            <StatColumn>
              <StatCell>
                <InlineStat 
                  color={colors.magicPink}
                  label={"PP"}
                  value={passivePerception}
                />
              </StatCell>

              <StatCell>
                <InlineStat 
                  color={colors.puzzleOrange}
                  label={"HP"}
                  value={hitPoints}
                />
              </StatCell>
            </StatColumn>
          </StatBlock>
          </Row>

        {languages 
          && <Row>
            <Languages
              data={languages}
            />
          </Row>
        }

        {!_.isEmpty(proficiencies)
          && <Row>
          <Proficiencies
            data={proficiencies}
          />
        </Row>
          
        }

        <Row>
          <Senses
            data={senses}
          />

          <Filler />

          <Speed
            data={speed}
          />
        </Row>

        <Row>
          <AbilityScores
            data={abilityScores}
          />
        </Row>

        <Row>
          hi
        </Row>

      </DisplayCard>
    </This>
  )
}

export default CreatureDisplayCard