import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import SearchBar from '../Components/Search/SearchBar'
import ScrollableContainer from '../Components/styled/ScrollableContainer'

import displayCards from '../Components/DisplayCards'
import toCapitalCase from '../utils/toCapitalCase'

import makeSearchCall from '../utils/makeSearchCall'

const This = styled.div`
flex-grow: 1;

display: flex;
flex-direction: column;

height: 100%;
`


const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const category = _.get(searchResults, 'category', null)

  useEffect(() => {
    const runSearch = async (searchQuery) => {
      if (searchQuery) {
        const result = await(makeSearchCall(searchQuery))

        setSearchResults(result)
      }
    }

    runSearch(searchQuery)
  }, [searchQuery])

  const ResultsComponent = category
  ? category === "monster" 
    ? displayCards[`CreatureDisplayCard`]
    : displayCards[`${toCapitalCase(category)}DisplayCard`]
  : null

  return (
    <This>
      <Section
        title="Search Results"
      >
        <SearchBar
          setSearchQuery={setSearchQuery}
        />

        <ScrollableContainer
          className="scrollableContainer"
        >
          {ResultsComponent 
            && <ResultsComponent 
              data={searchResults.data}
            />
          }
        </ScrollableContainer>
      </Section>
    </This> 
  )
}

export default Search