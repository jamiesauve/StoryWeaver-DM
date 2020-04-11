import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import displayCards from '../Components/SearchResults'

import toCapitalCase from '../utils/toCapitalCase'

const SearchResults = (props) => {
  const category = _.get(props, 'searchResults.category', null)

  const ResultsComponent = category 
  ? displayCards[`${toCapitalCase(category)}DisplayCard`]
  : null

  return (
    <div>
      {ResultsComponent 
      && <ResultsComponent 
        data={props.searchResults.data}
      />}
    </div> 
  )
}

export default SearchResults