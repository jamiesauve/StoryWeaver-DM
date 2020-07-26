import React from 'react'
import styled from 'styled-components'

import colors from '../../../data/styles/colors'

const This = styled.span`
  color: ${colors.freshwaterBlue};

  &:hover {
    cursor: pointer;
    color: ${colors.oceanBlue};
  }
`

const Link = props => {
  const {
    destinationAspect,
    destination,
    label
  } = props

  return (
    <This
      onClick={() => console.log(`going to ${destination} in ${destinationAspect}`)} // TODO: this should set the wikiLink item in context (which should change to Recoil.js).
    >
      {label}
    </This>
  )
}

Link.defaultProps = {
  destinationAspect: 'wiki',
};

export default Link