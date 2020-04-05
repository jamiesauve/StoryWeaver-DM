import React from 'react'
import styled from 'styled-components'

import SectionTitle from '../styled/SectionTitle'

const This = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.height ? 0 : 1};
  align-items: center;
  height: ${props => props.height ? `${props.height}px` : `100%`}
`

const Section = (props) => {
  return (
    <This 
      className = "section"
      height={props.height} 
    >
      <SectionTitle>
        {props.title}
      </SectionTitle>

      {props.children}
    </This>
  )
}

export default Section