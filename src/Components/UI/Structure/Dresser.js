import React, { useState, useEffect } from 'react'
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
  } = props

  const [ currentlyOpenDrawer, setCurrentlyOpenDrawer ] = useState(props.drawerToOpen)
  const [ areAllDrawersOpen, setAreAllDrawersOpen ] = useState(props.isInitiallyExpanded || false)

  const isOnlyOneDrawer = props.drawers.length === 1

  const openSelf = (drawerTitle) => {
    isOnlyOneDrawer 
      ? setAreAllDrawersOpen(true) 
      : areAllDrawersOpen 
        ? setCurrentlyOpenDrawer('') 
        : setCurrentlyOpenDrawer(drawerTitle)       
  }

  const closeSelf = () => {
    isOnlyOneDrawer 
      ? setAreAllDrawersOpen(false) 
      : setCurrentlyOpenDrawer('')  
  }

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

      {_.map(props.drawers, drawer => (
        <Drawer
          openSelf={() => openSelf(drawer.title)}
          closeSelf={closeSelf}
          isOpen={areAllDrawersOpen ? true : currentlyOpenDrawer === drawer.title}
          key={drawer.title}

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
 * ]
 */

export default Dresser