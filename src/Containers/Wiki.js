import React, { useState, useCallback, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Dresser from '../Components/UI/Structure/Dresser'
import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'
import Section from '../Components/UI/Structure/Section'
import WikiEntryDisplayCard from '../Components/DisplayCards/WikiEntryDisplayCard'

import SearchBar from '../Components/UI/Action/SearchBar'

import { wikiEntriesAsArray } from '../data/aspectData/wiki/wikiEntries'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Wiki = (props) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  const getDrawerToOpen = () => {
    const wikiEntry = _.find(wikiEntriesAsArray, {name: props.currentWikiLink.linkTarget})

    return wikiEntry
      ? wikiEntry.label
      : ''
  }
  
  // https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const debouncedSetSearchQuery = useCallback(_.debounce(setSearchQuery, 500), [])

  // TODO: a value is getting set in searchQuery now, and search should be fired by it changing. Need to set this up
  // TODO: make these filter by locationTags in places.js
  const drawers = _.chain(wikiEntriesAsArray)
  .map(wikiEntry => ({
    title: wikiEntry.label,
    titleDetail: wikiEntry.type,
    titleColor: wikiEntry.titleColor,
    content: () => <WikiEntryDisplayCard
    wikiEntry={wikiEntry}
    />
  }))
  .sortBy(entry => entry.title)
  .value()

  const handleSubmitSearch = (e) => {
    const searchTerm = e.target.value
    setSearchInput(searchTerm)
    
    debouncedSetSearchQuery(searchTerm)  
  }
  


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
          <SearchBar 
            onChange={handleSubmitSearch}
            placeholder="search"
            value={searchInput}
          />

          <Dresser 
            className="dresser"
            drawers={drawers}
            hasToggleAllLink
            initiallyExpanded={false}
            drawerToOpen={getDrawerToOpen()}
          />
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Wiki