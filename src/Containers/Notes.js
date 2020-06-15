import React from 'react'

import styled from 'styled-components'
import Divider from '../Components/styled/Divider'

import SessionEvents from '../Components/Notes/SessionEvents'
import SessionDetails from '../Components/Notes/SessionDetails'

const This = styled.div`
flex-grow: 1;

display: flex;
flex-direction: column;
`

const Notes = (props) => {
  return (
    <This
      className="notes"
    >
      <SessionEvents />
      <Divider />
      <SessionDetails />
    </This>
  )
}

export default Notes