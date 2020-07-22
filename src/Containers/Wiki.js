import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/UI/Structure/Section'

import Dresser from '../Components/UI/Structure/Dresser'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import WikiEntryDisplayCard from '../Components/DisplayCards/WikiEntryDisplayCard'

import { wikiEntriesAsArray } from '../data/aspectData/wiki/wikiEntries'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Wiki = (props) => {
  // TODO: make these filter by locationTags in places.js
  const drawers = wikiEntriesAsArray
  .map(wikiEntry => ({
    title: wikiEntry.label,
    titleDetail: wikiEntry.type,
    titleColor: wikiEntry.titleColor,
    content: () => <WikiEntryDisplayCard
      wikiEntry={wikiEntry}
    />
  }))

  return (
    <This
    className="wiki"
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

export default Wiki