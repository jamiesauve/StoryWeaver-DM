import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const This = styled.div`
  width: ${props => props.width || `250px`};
`

const SelectInput = (props) => {
  return (
    <This
      width={props.width}
    >
      <Select 
        options={props.options}
        styles={{
          backgroundColor: `#333`,
        }}
        value={props.value}
        {...props}
      />
    </This>
  )
}

export default SelectInput