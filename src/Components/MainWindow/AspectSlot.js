import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Frame from './Frame'
import Pane from './Pane'

import AspectTabContainer from './AspectTabContainer'

import { ActiveLocationContext, MainWindowBodyHeightContext } from '../../context/MainWindowContextProvider'

const This = styled.div``

const AspectSlot = (props) => {
  const {
    aspects,
  } = props
  
  const [activeAspect, setActiveAspect] = useState(null)
  const [ActiveAspectComponent, setActiveAspectComponent] = useState(null) // a component can't be rendered with a lower-case name, hence this variable

  useEffect(() => {
    setActiveAspect(aspects[0])
    setActiveAspectComponent(aspects[0].component)
  }, [aspects])

  useEffect(() => {
    (!_.isNull(activeAspect))
    && setActiveAspectComponent(activeAspect.component)
  }, [activeAspect])


  const activeLocation = useContext(ActiveLocationContext)
  const mainWindowBodyHeight = useContext(MainWindowBodyHeightContext)

  return (
    <This>
      <Frame
          className="frame"
        >
          {!_.isNull(activeAspect)
            && <>
              <AspectTabContainer
                className="pane"

                aspects={aspects}
                activeAspect={activeAspect}
                setActiveAspect={setActiveAspect}
              />

              <Pane
                className="pane"

                borderColor={activeAspect.color}
                // margin, border and padding on pane for both this pane and the MainWindowHeader one
                height={`${mainWindowBodyHeight - 64}px`} 
                isBorderTopVisible={false}
              >
                {
                  ActiveAspectComponent !== null
                  && <ActiveAspectComponent 
                    activeLocation={activeLocation}
                  />
                }
              </Pane> 
            </>
          }
          
        </Frame>
    </This>
  )
}

export default AspectSlot