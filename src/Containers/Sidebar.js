import React from 'react'

import Frame from '../Components/styled/Frame'
import Pane from '../Components/styled/Pane'
import Divider from '../Components/styled/Divider'

import DiceRoller from '../Components/Sidebar/DiceRoller'
import NPCNames from '../Components/Sidebar/NPCNames'
import SessionEvents from '../Components/Sidebar/SessionEvents'
import SessionNotes from '../Components/Sidebar/SessionNotes'

const Sidebar = (props) => {
  return (
    <Frame>
      <Pane
        borderColor={props.activeTerrainColor}
      >
        <DiceRoller />
        <Divider />
        <NPCNames />
        <Divider />
        <SessionEvents />
        <Divider />
        <SessionNotes />
      </Pane>
    </Frame>
  )
}

export default Sidebar