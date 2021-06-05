import React, { useState, useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Drawer from './Drawer'
import ToggleExpandedButton from './ToggleExpandedButton'

const This = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Dresser = (props) => {
  const {
    drawerToOpen,
    shouldKeepDrawersRendered = false,
  } = props

  const [ currentlyOpenDrawer, setCurrentlyOpenDrawer ] = useState(props.drawerToOpen)
  const [ areAllDrawersOpen, setAreAllDrawersOpen ] = useState(props.isInitiallyExpanded || false)

  const isOnlyOneDrawer = props.drawers.length === 1

  const openSelf = useCallback((drawerTitle) => {
    isOnlyOneDrawer 
      ? setAreAllDrawersOpen(true) 
      : areAllDrawersOpen 
        ? setCurrentlyOpenDrawer('') 
        : setCurrentlyOpenDrawer(drawerTitle)       
  }, [
    areAllDrawersOpen,
    isOnlyOneDrawer,
    setAreAllDrawersOpen,
    setCurrentlyOpenDrawer,
  ])

  const closeSelf = useCallback(() => {
    isOnlyOneDrawer 
      ? setAreAllDrawersOpen(false) 
      : setCurrentlyOpenDrawer('')  
  }, [
    isOnlyOneDrawer,
    setAreAllDrawersOpen,
    setCurrentlyOpenDrawer,
  ]);

  useEffect(() => {
    setAreAllDrawersOpen(props.isInitiallyExpanded)
  }, [
    props.drawers,
    props.isInitiallyExpanded,
  ])

  useEffect(() => {
    if (drawerToOpen) {
      setAreAllDrawersOpen(false)
      setCurrentlyOpenDrawer(drawerToOpen)
    }
  }, [
    drawerToOpen
  ])

  const drawers = useCallback(
    props.drawers.map(drawer => ({
      ...drawer,
      openSelf: () => openSelf(drawer.title),
    })),
    [
      props.drawers
    ]
  );

  return (
    <This
      className="Dresser"
    >
      {props.hasToggleAllLink 
        &&  <ToggleExpandedButton 
          areAllExpanded={areAllDrawersOpen}
          setAreAllExpanded={setAreAllDrawersOpen}
        />
      }

      {_.map(drawers, drawer => (
        <Drawer
          openSelf={drawer.openSelf}
          closeSelf={closeSelf}
          isOpen={areAllDrawersOpen ? true : currentlyOpenDrawer === drawer.title}
          key={drawer.title}
          shouldKeepDrawersRendered={shouldKeepDrawersRendered}

          content={drawer.content}
          title={drawer.title}
          titleColor={drawer.titleColor}
          titleDetail={drawer.titleDetail}
        />
      ))}
    </This>
  )
}

/**
 * props:
 * 
 * drawers: [
 *  label {String}: title of the drawer
 *  headingColor {String}: background color of the drawer
 *  contents {Component}: what shows up when the drawer is open
 *  shouldKeepDrawersRendered: bool
 * ]
 */

export default Dresser