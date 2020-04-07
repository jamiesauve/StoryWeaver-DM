import React from 'react'
import styled from 'styled-components'

const This = styled.div`
  width: ${props => props.width || `250px`};

  display: flex;
  flex-direction: row;
`

const Input = styled.input`
  flex-grow: 1;

  padding: 9px;

  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #777;
`

const TextInput = (props) => {
  return (
    <This
      width={props.width}
    >
      <Input
        onChange={(e) => console.log('change', e)}
        type="text"
        value={props.value}
        {...props}
      />
    </This>
  )
}

export default TextInput