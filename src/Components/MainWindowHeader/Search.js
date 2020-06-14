import React, { useState, } from 'react'
import styled from 'styled-components'

import TextInput from '../UI/TextInput'

import { sanitizeAlphaNumericWithConnectors } from '../../utils/sanitize'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
  align-items: center;

`

const SearchTitle = styled.div`
  margin-right: 10px;

  font-weight: bold;
`

const Search = (props) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmitOnSpace = (e) => {
    const input = e.target.value

    if (input.endsWith(" ") && input.length !== 2) {
      
      props.setSearchQuery(input)
      setSearchInput('')
    } else {
      const sanitizedInput = sanitizeAlphaNumericWithConnectors(input)
      setSearchInput(sanitizedInput)
    }
  }

  return (
    <This
      className="Search"
    >
      <SearchTitle>
        Search
      </SearchTitle>

      <TextInput
        autoFocus
        onChange={handleSubmitOnSpace}
        width={`100%`}
        value={searchInput}
      />
    </This>
  )
}

export default Search