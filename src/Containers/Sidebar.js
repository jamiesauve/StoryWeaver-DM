import React from 'react'
import styled from 'styled-components'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'

const This = styled.div`
width: 25vw;
`

const Sidebar = () => {
  return (
    <Frame>
      <Pane>
        Sidebar
      </Pane>
    </Frame>
  )
}

export default Sidebar