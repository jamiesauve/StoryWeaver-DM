import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import TabContainer from '../UI/TabContainer'

const This = styled.div``

const AspectTabContainer = (props) => {
  const [tabOptions, setTabOptions] = useState([])
  
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
  
  const handleDragEnd = (dropObject) => {
    const {
      destination,
      draggableId,
      source,
    } = dropObject

    if (!destination) return

    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return
    }

    const movedTab = _.find(tabOptions, {value: draggableId})

    const newTabOptions = _.cloneDeep(tabOptions)
    newTabOptions.splice(source.index, 1)
    newTabOptions.splice(destination.index, 0, movedTab)

    setTabOptions(newTabOptions)
  }

  const handleSetActiveTab = (aspectName) => {
    const newActiveAspect = _.find(props.aspects, { name: aspectName })

    props.setActiveAspect(newActiveAspect)
  }

  return (
    <This>
      <DragDropContext
        onDragEnd={handleDragEnd}
      >
        <Droppable
          droppableId={props.aspectSlotId.toString()} // this prop must be a string
        >
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <TabContainer 
                activeTab={props.activeAspect.name}
                borderColor={props.activeAspect.color}
                usesDragAndDrop={true}
                tabs={tabOptions}
                setActiveTab={handleSetActiveTab}
              />

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </This>
  )
}

export default AspectTabContainer