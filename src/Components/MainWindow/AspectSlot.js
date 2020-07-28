import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import {
  useRecoilValue,
} from 'recoil'

import Frame from './Frame'
import Pane from './Pane'

import AspectTabContainer from './AspectTabContainer'

import useWindowResize from '../../hooks/UseWindowResize'

import {
  activeLocationAtom,
  activeLocationTypeAtom,
  currentWikiLinkAtom,
} from '../../atoms/generalAtoms'

import colors from '../../data/styles/colors'

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


  const activeLocation = useRecoilValue(activeLocationAtom)
  const activeLocationType = useRecoilValue(activeLocationTypeAtom)
  const currentWikiLink = useRecoilValue(currentWikiLinkAtom)

  useEffect(() => {
    const destinationAspect = _.find(aspects, {name: currentWikiLink.destinationAspect})
    
    if (destinationAspect) {
      destinationAspect.linkTarget = currentWikiLink.linkTarget
      setActiveAspect(destinationAspect)
    }
  }, [
    currentWikiLink,
  ])

  const currentWindowHeight = useWindowResize()
  // margin, border and padding on panes for both MainWindowHeader pane and the aspect one, plus the height of MainWindowHeader
  const MAIN_WINDOW_HEADER_HEIGHT = 138 
  const aspectHeight = currentWindowHeight - MAIN_WINDOW_HEADER_HEIGHT

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
                    activeLocationType={activeLocationType}
                    currentWikiLink={currentWikiLink}
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