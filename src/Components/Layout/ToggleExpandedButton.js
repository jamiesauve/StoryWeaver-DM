import React from 'react'
import styled from 'styled-components'

const This = styled.div`
  align-self: flex-end;
  
  font-size: 12px;
  color: #aaf;
  cursor: pointer;
`

const ToggleExpandedButton = (props) => {
  const handleClick = () => {
    props.setAreAllExpanded(!props.areAllExpanded)
  }

  return (
    <This
      onClick={handleClick}
    >
      {props.areAllExpanded ? `collapse all` : `expand all`}
    </This>
  )
}

export default ToggleExpandedButton