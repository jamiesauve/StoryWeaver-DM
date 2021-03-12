import React from 'react'
import styled from 'styled-components'

import TextInput from './TextInput'

const This = styled.div`
  flex-grow: 0;

  margin: 10px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const Search = (props) => {
  const {
    onChange,
    placeholder,
    value,
  } = props

  return (
    <This
      className="Search"
    >

      <TextInput
        onChange={onChange}
        placeholder={placeholder}
        width={`100%`}
        value={value}
      />
    </This>
  )
}

export default Search