import React from 'react'
import styled from 'styled-components'

import Heading from '../Structure/Heading'

import theme from '../../../data/styles/theme'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  width: ${props => props.width || `auto`};

  ${props => props.alignItems 
    ? `align-items: ${props.alignItems};` 
    : ``
  }
`

const Input = styled.input`
  flex-grow: ${props => props.flexGrow || 0};

  width: ${props => props.width || `auto`};

  padding: 5px;
  resize: vertical;

  border: solid 1px rgba(255, 255, 255, 0.1);
  
  background: rgba(255, 255, 255, 0.1);
  font-size: ${theme.mediumTextSize};
  color: ${theme.lightGreyText};
`

const EditableInput = (props) => {
  const {
    alignItems,
    flexGrow,
    heading,
    inputWidth,
    placeholder,
    type,
    value,
    wrapperWidth,
  } = props

  return (
    <This
      alignItems={alignItems}
      className="editableInput"
      width={wrapperWidth}
    >
      {
        heading
        && <Heading>
          {heading}
        </Heading>
      }

      <Input
        flexGrow={flexGrow}
        placeholder={placeholder}
        type={type}
        value={value}
        width={inputWidth}
      />
    </This>
  )
}

export default EditableInput