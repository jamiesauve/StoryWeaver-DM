import React, { useState, useEffect, useCallback, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

import Dresser from '../Components/UI/Structure/Dresser'
import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'
import Section from '../Components/UI/Structure/Section'
import WikiEntryDisplayCard from '../Components/DisplayCards/WikiEntryDisplayCard'

import SearchBar from '../Components/UI/Action/SearchBar'

import createWikiEntryPlaceholders from '../data/aspectData/wiki/createWikiEntryPlaceholders'
import { wikiAtom } from '../state/atoms/aspectDataAtoms';

import colors from '../data/styles/colors'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Wiki = (props) => {
  const wikiData = useRecoilValue(wikiAtom);

  const wikiEntries = wikiData.wikiEntries;

  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [unfilteredDrawers, setUnfilteredDrawers] = useState([])
  const [currentDrawers, setCurrentDrawers] = useState([])

  useEffect(() => {
    setUnfilteredDrawers(filterDrawersBy('', props.activeLocation.label))
  }, [])

  useEffect(() => {
    setCurrentDrawers(unfilteredDrawers)
  }, [
    unfilteredDrawers
  ])

  useEffect(() => {
    if (searchQuery === "") {
      setCurrentDrawers(unfilteredDrawers);
    } else {
      setCurrentDrawers(filterDrawersBy(searchQuery))
    }
  }, [
    searchQuery,
  ])
  
  useEffect(() => {
    setCurrentDrawers(filterDrawersBy(searchQuery))
  }, [
    props.activeLocation.label,
  ])

  // https://medium.com/@rajeshnaroth/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const debouncedSetSearchQuery = useCallback(_.debounce(setSearchQuery, 500), [])  

  const filterDrawersBy = (filterTerm) => {
    const filterTermInLowerCase = filterTerm.toLowerCase()
    
    const filteredWikiEntries = _.filter(wikiEntries, wikiEntry => {
      const includedBySearchTerm =  _.includes(wikiEntry.label.toLowerCase(), filterTermInLowerCase)

      const includedByPlaceTag = (
        _.isEmpty(wikiEntry.placeTags)
        || _.isEmpty(props.activeLocation) 
      )
      ? true
      : (
        _.includes(wikiEntry.placeTags, props.activeLocation.name)
        || _.includes(wikiEntry.name, props.activeLocation.name)
      )

      return (includedBySearchTerm && includedByPlaceTag)
    })


    const drawers = _.chain(filteredWikiEntries)
    .map(wikiEntry => ({
      title: wikiEntry.label,
      titleDetail: wikiEntry.type.subType,
      titleColor: wikiEntry.titleColor,
      content: () => <WikiEntryDisplayCard
        wikiEntry={wikiEntry}
      />
    }))
    .sortBy(entry => entry.title)
    .concat({
      name: null,
      title: `+`,
      titleColor: colors.winterWhite,
      content: () => <WikiEntryDisplayCard
        isEditable={true}
        isInCreateMode={true}
        placeholders={createWikiEntryPlaceholders}
        wikiEntry={{}}
      />
    })
    .value()

    return drawers
  }

  const getDrawerToOpen = () => {
    const wikiEntry = _.find(wikiEntries, {name: props.currentWikiLink.linkTarget})

    return wikiEntry
      ? wikiEntry.label
      : ''
  }
  

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
            drawers={currentDrawers}
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