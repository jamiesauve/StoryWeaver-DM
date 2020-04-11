import React from 'react'
import styled from 'styled-components'

import Cost from './statComponents/Cost'
import Damage from './statComponents/Damage'
import Properties from './statComponents/Properties'
import Range from './statComponents/Range'
import Special from './statComponents/Special'

import restructureData from './restructure/weapon'
import Weight from './statComponents/Weight'

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  border: 1px solid #777;
  border-radius: 5px;
  padding: 5px;

  background: #333;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || `flex-start`};
  align-items: center;

  padding: ${props => props.padding || `0`};
`

const Title = styled.div`
  font-weight: bold;
`

const TitleDetail = styled.div`
  margin-left: 10px;
  font-style: italic;
  font-size: 12px;
`

const WeaponDisplayCard = (props) => {
  const weaponData = restructureData(props.data)

  const {
    name,
    type,
    cost,
    combatRange,
    damage,
    properties,
    range,
    special,
    weight,
  } = weaponData

  return (
    <This>
      <Row
        padding="0 0 5px 0"
      >
        <Title>
          {name}
        </Title>

        <TitleDetail>
          {type} {combatRange} Weapon
        </TitleDetail>

        <Cost 
          data={cost} 
        />

        <Weight
          data={weight}
        />
      </Row>

      <Row
        justifyContent="space-evenly"
      > 
        <Range
          combatRange={combatRange}
          data={range}
        />
        
        <Damage 
          data={damage}
        />  
       
      </Row>

      <Row
        justifyContent="center"
        padding="0 0 5px 0"
      >
        <Properties
          data={properties}
        />

        {special 
          && <Special
            data={special}
          />
        }
      </Row>
    </This>
  )
}

export default WeaponDisplayCard