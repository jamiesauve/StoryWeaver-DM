import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ColorPalette from './ColorPalette'

import colors from '../../../../data/styles/colors'

const This = styled.div`
  width: ${props => props.sizeInPixels}px;
  height: ${props => props.sizeInPixels}px;

  background: ${props => props.value};
`

const BackgroundScreen = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;

  background: white;
  opacity: 0.1;

  width: 100vw;
  height: 100vh;
`

const ColorPaletteContainer = styled.div`
  position: relative;
  ${props => props.horizontalShiftInPixels ? `left: ${props.horizontalShiftInPixels}px;` : ``}
`

const ColorPicker = props => {
  const {
    horizontalShiftInPixels,
    initialValue,
    numberOfColumns,
    onChange,
    sizeInPixels,
  } = props

  const [currentColor, setCurrentColor] = useState(initialValue)
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false)

  const handleChange = (color) => {
    setCurrentColor(color);
    onChange(color);
  }

  const toggleIsColorPaletteOpen = () => {
    isColorPaletteOpen
      ? setIsColorPaletteOpen(false)
      : setIsColorPaletteOpen(true)
  }

  const paletteSizeInPixels = sizeInPixels * numberOfColumns

  return (
    <This
      sizeInPixels={sizeInPixels}
      onClick={toggleIsColorPaletteOpen}
      value={currentColor}
    >
      {
        isColorPaletteOpen
          ? <ColorPaletteContainer
            horizontalShiftInPixels={horizontalShiftInPixels}    
          >
            <BackgroundScreen
              className="backgroundScreen"
              onClick={() => setIsColorPaletteOpen(false)}
            />
            
            <ColorPalette
              paletteSizeInPixels={paletteSizeInPixels}
              colors={Object.values(colors).slice(0, 22)} // Exclude text/background colors. This will need to be updated if we add more theme colors
              numberOfColumns={numberOfColumns}
              onChange={handleChange}
              sizeInPixels={sizeInPixels}
            />
          </ColorPaletteContainer>
          : null
      }

    </This>
  )
}

ColorPicker.defaultProps = {
  horizontalShiftInPizels: 0,
  numberOfColumns: 5,
  sizeInPixels: 30,
}

export default ColorPicker