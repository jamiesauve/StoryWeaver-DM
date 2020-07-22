import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import EditableInput from './EditableInput'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: row;

  align-items: center;

  & > * {
    margin: 3px;
  }
`

const FillInTheBlanks = (props) => {
  const {
    copySegments, // array
    fieldGroupIndex,
    handleChange, // update state function
    items, // array
  } = props

  const generateFillInTheBlanks = () => {
    return _.chain(items)
    .reduce((aggr, item, index) => {
      aggr.push(copySegments[index] || ``)
      
      const currentField = items[index] || {}

      if (!_.isEmpty(currentField)) {
        aggr.push(
          <EditableInput
            key={currentField.fieldName || index}
            name={currentField.fieldName}
            flexGrow={currentField.flexGrow}
            onChange={e => handleChange(fieldGroupIndex, currentField.fieldName, e.target.value)}
            placeholder={currentField.placeholder}
            type={currentField.fieldType}
            value={currentField.value || ``}
            width={currentField.fieldWidth || `50px`}
          />
        )
      }
      
      return aggr
    }, [])
    .thru(blendedArray => {
      if(copySegments.length > items.length) {
        return blendedArray.concat(copySegments.slice(items.length))
      }
      return blendedArray
    })
    .value()

    
  }


  return (
    <This
      className="fillInTheBlanks"
    >
     {generateFillInTheBlanks()} 
    </This>
  )
}

FillInTheBlanks.defaultProps = {
  copySegments: [],
  items: [],
}

export default FillInTheBlanks