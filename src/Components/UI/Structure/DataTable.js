import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const This = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const HeadingCell = styled.div`
  min-width: 65px;

  margin: 5px;
  
  font-style: italic;
`

const DataCell = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  margin: 5px;
`

const DataTable = (props) => {
  const {
    renderRowsWithNoData,
    tableRows,
  } = props

  const generateTableRows = () => (
    _.chain(tableRows)
    .map((tableRow, index) => {
      const shouldCreateRow = renderRowsWithNoData
      ? !_.isEmpty(tableRow.valueCells)
      : true

      const valueCells =  _.map(
        tableRow.valueCells, 
        valueCell => {
          return (
            <DataCell
              // as long as the order won't change, index seems to be okay to use as a key: https://reactjs.org/docs/lists-and-keys.html
              key={`${tableRow.labelCell}-${typeof valueCell === "string" ? valueCell : index}`} 
            >
          {valueCell}
        </DataCell>
      )})
      
      return shouldCreateRow
      ? <Row
      key={tableRow.labelCell}
      >
        <HeadingCell>
          {tableRow.labelCell}
        </HeadingCell>

        {valueCells}
      </Row>
      : null
    })
    .compact()
    .value()
  )

  return (
    <This>
      {generateTableRows()}
    </This>
  )
}

export default DataTable