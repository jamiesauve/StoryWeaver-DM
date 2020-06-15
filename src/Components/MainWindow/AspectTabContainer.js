import React from 'react'
import styled from 'styled-components'

import _ from 'lodash'

import TabContainer from '../UI/TabContainer'

const This = styled.div``

const AspectTabContainer = (props) => {
  const tabOptions = _.map(props.aspects, aspect => ({
    color: aspect.color,
    label: aspect.label,
    value: aspect.name,
  }))

  const handleSetActiveTab = (aspectName) => {
    const newActiveAspect = _.find(props.aspects, { name: aspectName })

    props.setActiveAspect(newActiveAspect)
  }

  return (
    <This>
      <TabContainer 
        activeTab={props.activeAspect.name}
        borderColor={props.activeAspect.color}
        tabs={tabOptions}
        setActiveTab={handleSetActiveTab}
      />
    </This>
  )
}

export default AspectTabContainer