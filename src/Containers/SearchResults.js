import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Section from '../Components/Layout/Section'
import ScrollableContainer from '../Components/styled/ScrollableContainer'

import displayCards from '../Components/DisplayCards'

import toCapitalCase from '../utils/toCapitalCase'

const This = styled.div`
flex-grow: 1;

display: flex;
flex-direction: column;

height: 100%;
`

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
        <ScrollableContainer
          className="scrollableContainer"
        >
          {ResultsComponent 
            && <ResultsComponent 
              data={props.searchResults.data}
            />
          }
        </ScrollableContainer>
      </Section>
    </This> 
  )
}

export default SearchResults