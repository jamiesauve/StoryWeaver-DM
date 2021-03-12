import React, { useState, useEffect, useCallback, } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Dresser from '../Components/UI/Structure/Dresser'
import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'
import Section from '../Components/UI/Structure/Section'
import PersonDisplayCard from '../Components/DisplayCards/PersonDisplayCard'

import SearchBar from '../Components/UI/Action/SearchBar'

import createWikiEntryPlaceholders from '../data/aspectData/wiki/createWikiEntryPlaceholders'
import people from '../data/aspectData/people/people'

import colors from '../data/styles/colors'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const People = (props) => {
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

    console.log('peope', people)
    
    const filteredWikiEntries = _.filter(people, person => {
      const includedBySearchTerm =  _.includes(person.label.toLowerCase(), filterTermInLowerCase)

      const includedByPlaceTag = (
        _.isEmpty(person.placeTags)
        || _.isEmpty(props.activeLocation) 
      )
      ? true
      : (
        _.includes(person.placeTags, props.activeLocation.name)
        || person.name === props.activeLocation.name
      )

      return (includedBySearchTerm && includedByPlaceTag)
    })


    const drawers = _.chain(filteredWikiEntries)
    .map(person => ({
      title: person.label,
      titleDetail: person.race.label,
      titleColor: person.titleColor,
      content: () => <PersonDisplayCard
        person={person}
      />
    }))
    .sortBy(entry => entry.title)
    .concat({
      name: null,
      title: `+`,
      titleColor: colors.winterWhite,
      content: () => <PersonDisplayCard
        isEditable={true}
        isInCreateMode={true}
        placeholders={createWikiEntryPlaceholders}
        person={{}}
      />
    })
    .value()

    return drawers
  }

  const getDrawerToOpen = () => {
    const person = _.find(people, {name: props.currentWikiLink.linkTarget})

    return person
      ? person.label
      : ''
  }
  

  const handleSubmitSearch = (e) => {
    const searchTerm = e.target.value
    setSearchInput(searchTerm)
    
    debouncedSetSearchQuery(searchTerm)  
  }

  return (
    <This
    className="people"
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

export default People