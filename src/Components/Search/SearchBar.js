import React, { useState, } from 'react'
import styled from 'styled-components'

import TextInput from '../UI/TextInput'

import { sanitizeAlphaNumericWithConnectors } from '../../utils/sanitize'

const This = styled.div`
  flex-grow: 0;

  margin: 10px 0;

  display: flex;
  flex-direction: row;
  align-items: center;

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

      <TextInput
        autoFocus
        onChange={handleSubmitOnSpace}
        placeholder="ie: c goblin"
        width={`100%`}
        value={searchInput}
      />
    </This>
  )
}

export default Search