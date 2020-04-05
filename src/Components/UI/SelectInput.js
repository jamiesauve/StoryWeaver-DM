import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const SelectInput = (props) => {
  return (
    <Select 
      styles={{
        backgroundColor: `#333`,
      }}

      {...props}
    />
  )
}

export default SelectInput