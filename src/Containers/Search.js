import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/UI/Structure/Section'
import SearchBar from '../Components/UI/Action/SearchBar'
import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'

import displayCards from '../Components/DisplayCards'
import toCapitalCase from '../utils/toCapitalCase'

import makeSearchCall from '../utils/makeSearchCall'
import { sanitizeAlphaNumericWithConnectors } from '../utils/sanitize'

const This = styled.div`
flex-grow: 1;

display: flex;
flex-direction: column;

height: 100%;
`


const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [searchInput, setSearchInput] = useState('')

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

  const handleSubmitOnSpace = (e) => {
    const input = e.target.value

    if (input.endsWith(" ") && input.length !== 2) {
      
      setSearchQuery(input)
      setSearchInput('')
    } else {
      const sanitizedInput = sanitizeAlphaNumericWithConnectors(input)
      setSearchInput(sanitizedInput)
    }
  }

  const ResultsComponent = category
  ? category === "monster" 
    ? displayCards[`CreatureDisplayCard`]
    : displayCards[`${toCapitalCase(category)}DisplayCard`]
  : null

  return (
    <This>
      <Section
        className="section"
      >
        <SearchBar
          onChange={handleSubmitOnSpace}
          placeholder={"ie: c goblin"}
          value={searchInput}
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