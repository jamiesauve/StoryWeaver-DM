import React, { createRef } from 'react'
import styled from 'styled-components'

import ToggleButtonGroup from './ToggleButtonGroup'
import theme from '../../../data/styles/theme'

const This = styled.div`
  margin: 5px 5px -8px 5px;
`

const TabContainer = (props) => {
  const droppableRef = createRef(props.innerRef)

  const toggleButtonStyles = {
    component: {
      backgroundColor: theme.lightDarkBackground,
      hasBorder: true,
      borderColor: props.borderColor || theme.darkGreyText,
    },
    option: {
      textColor: theme.lightGreyText,
    },
    separator: {
      isVisible: false,
    },
  }

  return (
    <This
      ref={droppableRef}
    >
      <ToggleButtonGroup
        activeOption={props.activeTab}
        areTabsContracted={props.areTabsContracted}
        options={props.tabs} // label/value pairs
        usesDragAndDrop={props.usesDragAndDrop}
        setActiveOption={props.setActiveTab}
        styles={toggleButtonStyles}
      />
    </This>
  )
}

export default TabContainer