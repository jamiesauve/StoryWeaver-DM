import React from 'react'
import styled from 'styled-components'

import Section from '../Components/Layout/Section'

import plants from '../data/plants'

const This = styled.div``

const Plants = (props) => {
  return (
    <This>
      <Section
        title="Plants"
      >
      {JSON.stringify(plants)}
      </Section>
    </This>
  )
}

export default Plants