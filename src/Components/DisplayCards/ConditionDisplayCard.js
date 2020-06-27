import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import BulletList from '../Stats/List'

import DisplayCard from '../styled/DisplayCard/Card'
import Row from '../styled/DisplayCard/Row'

import colors from '../../data/styles/colors'

const This = styled.div``

const ConditionDisplayCard = (props) => {
  const {
    name,
    desc: descriptionItems,
  } = props.data

  console.log(props)

  return (
    <This>
      <DisplayCard>
        <Row
          justifyContent="flex-start"
          padding="0 0 5px 0"
        >
          <BulletList
            borderColor={colors.magicPink}
            heading={name}
            items={_.map(descriptionItems, item => item.slice(2))}
          />
        </Row>
      </DisplayCard>
    </This>
  )
}

export default ConditionDisplayCard