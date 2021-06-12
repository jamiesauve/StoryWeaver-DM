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
} from '../../state/atoms/generalAtoms'

import colors from '../../data/styles/colors'

const This = styled.div``

const AspectComponentVisibilityWrapper = styled.div`
  flex-grow: 1;
  max-height: 100%;
  
  display: flex;
  flex-direction: column;

  ${props => props.isVisible 
      ? ``
      : `display: none;`
  }
`

const AspectSlot = (props) => {
  const {
    aspects,
  } = props
  
  const [activeAspect, setActiveAspect] = useState(null)

  useEffect(() => {
    setActiveAspect(aspects[0])
  }, [aspects])

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

                borderColor={_.get(activeAspect, 'color', colors.darkGreyText)}
                height={`${aspectHeight}px`} 
                isBorderTopVisible={false}
              >
                {
                  _.map(aspects, aspect => {
                    const AspectComponent = aspect.component();

                    return (
                      <AspectComponentVisibilityWrapper
                        className="visibility-wrapper"
                        key={ _.get(aspect, 'name')}
                        isVisible={_.get(activeAspect, 'name', null) === _.get(aspect, 'name')}
                      >
                        <AspectComponent 
                          activeLocation={activeLocation}
                          activeLocationType={activeLocationType}
                          currentWikiLink={currentWikiLink}
                        />
                      </AspectComponentVisibilityWrapper>
                    )
                  })
                }
              </Pane> 
            </>
          }
          
        </Frame>
    </This>
  )
}

export default AspectSlot