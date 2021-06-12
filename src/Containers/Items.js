import React, { useCallback } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

import Section from '../Components/UI/Structure/Section'

import Dresser from '../Components/UI/Structure/Dresser'

import ItemDisplayCard from '../Components/DisplayCards/ItemDisplayCard'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import {
  itemsAtom,
} from '../state/atoms/aspectDataAtoms'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Items = () => {
  const items = useRecoilValue(itemsAtom)

  const drawers = useCallback(_.map(items, item => ({
    key: item.label,
    title: item.label,
    titleColor: item.colorCode,
    content: () => <ItemDisplayCard
      item={item}
    />,
  })), [
    items,
  ])

  return (
    <This
    className="items"
    >
      <Section
        className="section"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <Dresser 
            className="dresser"
            drawers={drawers}
            hasToggleAllLink
            initiallyExpanded={false}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Items