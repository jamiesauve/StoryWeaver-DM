import React from 'react'

import styled from 'styled-components'
import Divider from '../Components/styled/Divider'

import SessionEvents from '../Components/Notes/SessionEvents'
import SessionDetails from '../Components/Notes/SessionDetails'

const This = styled.div``

const Notes = (props) => {
  return (
    <This>
      <SessionEvents />
      <Divider />
      <SessionDetails />
    </This>
  )
}

export default Notes