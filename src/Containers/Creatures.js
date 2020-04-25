import React from 'react'
import styled from 'styled-components'

import Section from '../Components/Layout/Section'
import ScrollableContainer from '../Components/styled/ScrollableContainer'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const Creatures = (props) => {
  return (
    <This>
      <Section
        title="Creatures"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          Joblin the Goblin
        </ScrollableContainer>
      </Section>
    </This>
  )
}

export default Creatures