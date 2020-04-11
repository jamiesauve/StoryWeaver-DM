import React, { useState, } from 'react'
import styled from 'styled-components'

import TextInput from '../UI/TextInput'

import { sanitizeAlphaNumericWithConnectors } from '../../utils/sanitize'

const This = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const SearchTitle = styled.div`
  margin-right: 10px;
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
    <This>
      <SearchTitle>
        Search: 
      </SearchTitle>

      <TextInput
        onChange={handleSubmitOnSpace}
        value={searchInput}
        width={`44vw`}
      />
    </This>
  )
}

export default Search