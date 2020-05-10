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

import ScrollableContainer from '../styled/ScrollableContainer'
import Spacer from '../styled/Spacer'
import DisplayCard from '../styled/DisplayCard/Card'
import Row from '../styled/DisplayCard/Row'
import Title from '../styled/DisplayCard/Title'
import TitleDetail from '../styled/DisplayCard/TitleDetail'

import colors from '../../data/colors'
import BulletList from '../Stats/BulletList'

const This = styled.div``

const Filler = styled.div`
  flex-grow: 1;
`

const DamageStatContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;

  max-width: ${props => props.areThereMultipleDamageStats ? `75%` : `100%`};

  display: flex;
  flex-direction: inherit;
`

const CreatureDisplayCard = (props) => {
  const creatureData = restructureData(props.data)

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
    specialAbilities,
    spellDC,
    subType,
    type,
  } = creatureData

  // used to make sure one damage stat doesn't fill the screen if there are others as it would hide them visually
  const areThereMultipleDamageStats = _.chain([
    !_.isEmpty(damageImmunities),
    !_.isEmpty(damageResistances),
    !_.isEmpty(damageVulnerabilities)
  ])
  .compact()
  .value()
  .length > 1

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
        </Row>

        <Row
          className="row"
        >
          <InlineStat 
            color={colors.battleRed}
            label={"CR"}
            value={challengeRating}
          />
        
          <Filler />

          <InlineStat 
            color={colors.magicPink}
            label={"PP"}
            value={passivePerception}
          />
        </Row>

        <Row>
          <ScrollableContainer
            className="scrollableContainer"
            flexDirection="row"
          >
            <Senses
              data={senses}
            />

            <Filler />

            <Speed
              data={speed}
            />
          </ScrollableContainer>
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
          <AbilityScores
            data={abilityScores}
          />
        </Row>

        <Row
          padding={"5px"}
        >
          <Filler />

          {spellDC
            && <InlineStat 
            color={colors.magicPink}
            label={"Spell DC"}
            value={spellDC}
          />
          }

          <InlineStat 
            color={colors.weatherBlue}
            label={"AC"}
            value={armorClass}
          />
        
          <InlineStat 
            color={colors.puzzleOrange}
            label={"HP"}
            value={hitPoints}
          />
        </Row>

        <Row>
        <ScrollableContainer
            className="scrollableContainer"
            flexDirection="row"
          >
            {!_.isEmpty(damageImmunities)
              && <DamageStatContainer
                areThereMultipleDamageStats={areThereMultipleDamageStats}
              >
                <BulletList
                  borderColor={colors.battleRed}
                  items={damageImmunities}
                  heading="Damage Immunities"
                />
              </DamageStatContainer>
            }

            {!_.isEmpty(damageResistances)
              && <DamageStatContainer
                areThereMultipleDamageStats={areThereMultipleDamageStats}
              >
                <BulletList
                  borderColor={colors.puzzleOrange}
                  items={damageResistances}
                  heading="Damage Resistances"
                />
              </DamageStatContainer>
            }

            {!_.isEmpty(damageVulnerabilities)
              && <DamageStatContainer
                areThereMultipleDamageStats={areThereMultipleDamageStats}
              >
                <BulletList
                  borderColor={colors.forestGreen}
                  items={damageVulnerabilities}
                  heading="Damage Vulnerabilities"
                />
              </DamageStatContainer>
            }
          </ScrollableContainer>
        </Row>

        {
          (
            _.isEmpty(specialAbilities) 
            && !_.isEmpty(damageImmunities) // don't want two different item types of the same color next to each other
          )
        ? <Spacer />
        : _.map(specialAbilities, specialAbility => (
          <Description
            borderColor={colors.magicPink}
            text={`
            ${specialAbility.description}
            ${specialAbility.usage 
              ? `(${specialAbility.usage.times} times ${specialAbility.usage.type})` 
              : ``
            }
            `}
            heading={specialAbility.name}
          />
        ))}

        {_.map(actions, action => (
          <Row>
            <Description
            borderColor={colors.battleRed}
            text={action.description}
            heading={action.name}
            />
          </Row>
        ))}

      </DisplayCard>
    </This>
  )
}

export default CreatureDisplayCard