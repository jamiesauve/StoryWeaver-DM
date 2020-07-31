import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import colors from '../../../../data/styles/colors'

const This = styled.div`
  z-index: 100;
  position: absolute;
  
  display: flex;
  flex-direction: column;

  width: ${props => props.width}px;

  background: ${colors.mediumBackground};
  border-radius: 3px;
  border: 1px solid ${colors.mountainsTeal};
  box-shadow: 0 1px 10px ${colors.darkBackground};
`

const Row = styled.div`
  height: ${props => props.height}px;

  flex-grow: 1;

  display: flex;
  flex-direction: row;
`

const Cell = styled.div`
  margin: 1px;
  width: ${props => props.width - 4}px; //border and margin on both sides

  background: ${props => props.colorValue};
  border: 1px solid ${colors.mediumBackground};

  &:hover {
    border: 1px solid ${colors.winterWhite};
  }
`

const ColorPalette = props => {
  const {
    cellDimensionInPixels,
    colors,
    numberOfColumns,
    onChange,
    sizeInPixels,
  } = props

  const getRows = () => {
    const rows = _.chunk(colors, numberOfColumns)

    return _.map(rows, row => (
      <Row
        key={row[0]}
        height={cellDimensionInPixels}
      >
        {getCells(row)}
      </Row>
    ))
  }

  const getCells = (row) => {
    return _.map(row, cell => (
      <Cell
        key={cell}
        colorValue={cell}
        onClick={() => onChange(cell)}
        width={cellDimensionInPixels}
      />
    ))
  }

  return (
    <This
      width={sizeInPixels}
    >
      {getRows()}
    </This>
  )
}

export default ColorPalette