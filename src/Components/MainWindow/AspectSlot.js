import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Frame from './Frame'
import Pane from './Pane'

import AspectTabContainer from './AspectTabContainer'

import { ActiveLocationContext, MainWindowBodyHeightContext } from '../../context/MainWindowContextProvider'
import colors from '../../data/colors'

const This = styled.div``

const AspectSlot = (props) => {
  const {
    aspects,
  } = props
  
  const [activeAspect, setActiveAspect] = useState(null)
  // a component can't be rendered with a lower-case name, hence this variable
  const [ActiveAspectComponent, setActiveAspectComponent] = useState(null)

  useEffect(() => {
    setActiveAspect(aspects[0])
    setActiveAspectComponent(_.get(aspects, 'component', null))
  }, [aspects])

  useEffect(() => {
    (!_.isNull(activeAspect))
    && setActiveAspectComponent(_.get(activeAspect, 'component', null))
  }, [activeAspect])


  const activeLocation = useContext(ActiveLocationContext)
  const windowHeight = useContext(MainWindowBodyHeightContext)
  // margin, border and padding on panes for both MainWindowHeader pane and the aspect one, plus the height of MainWindowHeader
  const mainWindowHeaderHeight = 138 
  const aspectHeight = windowHeight - mainWindowHeaderHeight

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
                aspectSlotId={props.aspectSlotId}
                activeAspect={activeAspect}
                setActiveAspect={setActiveAspect}
              />

              <Pane
                className="pane"

                borderColor={_.get(activeAspect, 'color', colors.darkGrey)}
                height={`${aspectHeight}px`} 
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