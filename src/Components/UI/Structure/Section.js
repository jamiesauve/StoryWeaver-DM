import React from 'react'
import styled from 'styled-components'

const This = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.height ? 0 : 1};
  align-items: stretch;
  height: ${props => props.height ? `${props.height}` : `auto`};
  max-height: 100%;
`

const SectionTitle = styled.div`
  margin-bottom: 7px;
  font-weight: bold;
`

const ItemTopRight = styled.div`
  align-self: flex-end;
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
      
      {
        props.rightItem
        && <ItemTopRight>
          {props.rightItem}
        </ItemTopRight> 
      }

      {props.children}
    </This>
  )
}

export default Section