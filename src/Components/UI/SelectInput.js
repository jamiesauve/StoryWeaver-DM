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
          menu: (existingStyles => ({
            ...existingStyles,
            color: '#444',
          })),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#444',
            primary25: '#eee',
            primary50: '#aaa',
          }
        })}
        value={props.value}
        {...props}
      />
    </This>
  )
}

export default SelectInput