import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { Droppable } from 'react-beautiful-dnd'

import AreTabsContractedContext from '../../context/AreTabsContractedContext'

import TabContainer from '../UI/TabContainer'
import colors from '../../data/colors'

const This = styled.div``

const AspectTabContainer = (props) => {
  const [tabOptions, setTabOptions] = useState([])

  const areTabsContracted = useContext(AreTabsContractedContext)
  
  useEffect(() => {
    const newTabOptions = _.map(props.aspects, aspect => ({
      color: aspect.color,
      label: aspect.label,
      value: aspect.name,
    }))

    setTabOptions(newTabOptions)
  }, [
    props.aspects,
    setTabOptions
  ])

  const handleSetActiveTab = (aspectName) => {
    const newActiveAspect = _.find(props.aspects, { name: aspectName })

    props.setActiveAspect(newActiveAspect)
  }

  const emptyTabOptions = [{
    color: colors.darkGrey,
    label: '[empty]', 
    value: 'empty', 
  }]

  // console.log(props.aspectSlotId, 
  //   'has something in it:', !_.isEmpty(tabOptions))

  return (
    <This>
        {!_.isEmpty(tabOptions)
          && (
            <Droppable
              direction={"horizontal"}
              droppableId={props.aspectSlotId.toString()} // this prop must be a string
            >
              {provided => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <TabContainer 
                    activeTab={_.get(props.activeAspect, 'name', null)}
                    areTabsContracted={areTabsContracted}
                    borderColor={_.get(props.activeAspect, 'color', colors.darkGrey)}
                    usesDragAndDrop={true}
                    tabs={!_.isEmpty(tabOptions) ?  tabOptions : emptyTabOptions}
                    setActiveTab={handleSetActiveTab}
                  />

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )
        }
    </This>
  )
}

export default AspectTabContainer