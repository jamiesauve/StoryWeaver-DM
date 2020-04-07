import React from 'react'
import styled from 'styled-components'

import TextInput from '../UI/TextInput'

const This = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const SearchTitle = styled.div`
  margin-right: 10px;
`

const Search = (props) => {
  return (
    <This>
      <SearchTitle>
        Search: 
      </SearchTitle>

      <TextInput
        value={'boo'}
        width={`44vw`}
      />
    </This>
  )
}

export default Search