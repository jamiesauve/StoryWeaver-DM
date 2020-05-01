import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Value from '../Stats/Value'
import Damage from '../Stats/Damage'
import BreadCrumbList from '../Stats/BreadCrumbList'
import Range from '../Stats/Range'
import Description from '../Stats/Description'

import restructureData from '../SearchResults/dataRestructuring/weapon'
import Weight from '../Stats/Weight'

import DisplayCard from '../styled/DisplayCard/Card'
import Row from '../styled/DisplayCard/Row'
import Title from '../styled/DisplayCard/Title'
import TitleDetail from '../styled/DisplayCard/TitleDetail'

import colors from '../../data/colors'

const This = styled.div``

const WeaponDisplayCard = (props) => {
  const weaponData = restructureData(props.data)

  const {
    label,
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
      <DisplayCard>
        <Row
          padding="0 0 5px 0"
        >
          <Title>
            {label}
          </Title>

          <TitleDetail>
            {type} {combatRange} Weapon
          </TitleDetail>

          <Value 
            data={cost} 
          />

          <Weight
            data={weight}
          />
        </Row>

        <Row> 
          <Range
            combatRange={combatRange}
            data={range}
          />
          
          <Damage 
            data={damage}
          />  
        
        </Row>

        <Row
          justifyContent="flex-start"
          padding="0 0 5px 0"
        >
          <BreadCrumbList
            borderColor={colors.plainsYellow}
            data={properties}
          />

          {special 
            && !_.isEmpty(special)
            && <Description
              borderColor={colors.mountainsTeal}
              text={special}
            />
          }
        </Row>
      </DisplayCard>
    </This>
  )
}

export default WeaponDisplayCard