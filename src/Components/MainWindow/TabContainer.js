import React from 'react'
import styled from 'styled-components'

import ToggleButtonWithLabels from '../UI/ToggleButtonWithLabels'
import colors from '../../data/colors'

const This = styled.div`
  margin: 5px 5px -8px 5px;
`

const TabContainer = (props) => {

  return (
    <This>
      <ToggleButtonWithLabels
        activeOption={props.activeTab}
        areOptionsFullySeparated={true}
        backgroundColor={colors.darkBackground}
        border={`1px solid ${colors.darkGrey}`}
        hoverBackgroundColor={colors.darkGrey}
        innerColor={colors.darkGrey}
        setActiveOption={props.setActiveTab}
        textColor={colors.lightGrey}
        options={props.dummyData}
      />
    </This>
  )
}

export default TabContainer