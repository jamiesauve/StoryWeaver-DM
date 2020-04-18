import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'

import displayCards from '../Components/DisplayCards'

import toCapitalCase from '../utils/toCapitalCase'

const This = styled.div``

const SearchResults = (props) => {
  const category = _.get(props, 'searchResults.category', null)

  const ResultsComponent = category 
  ? displayCards[`${toCapitalCase(category)}DisplayCard`]
  : null

  return (
    <This>
      <Section
        title="Search Results"
      >
        {ResultsComponent 
          && <ResultsComponent 
            data={props.searchResults.data}
          />
        }
      </Section>
    </This> 
  )
}

export default SearchResults