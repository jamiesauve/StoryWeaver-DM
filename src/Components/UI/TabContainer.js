import React from 'react'
import styled from 'styled-components'

import ToggleButtonGroup from './ToggleButtonGroup'
import colors from '../../data/colors'

const This = styled.div`
  margin: 5px 5px -8px 5px;
`

const TabContainer = (props) => {
  const toggleButtonStyles = {
    component: {
      backgroundColor: colors.lightDarkBackground,
      hasBorder: true,
      borderColor: props.borderColor || colors.darkGrey,
    },
    option: {
      textColor: colors.lightGrey,
    },
    separator: {
      isVisible: false,
    },
  }

  return (
    <This>
      <ToggleButtonGroup
        activeOption={props.activeTab}
        options={props.tabs} // label/value pairs
        setActiveOption={props.setActiveTab}
        styles={toggleButtonStyles}
      />
    </This>
  )
}

export default TabContainer