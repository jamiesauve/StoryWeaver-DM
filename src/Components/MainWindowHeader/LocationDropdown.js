import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SelectInput from '../UI/Action/SelectInput'



const This = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const Title = styled.div`
  margin-right: 10px;

  font-weight: bold;
`

const LocationDropdown = (props) => {
  const handleSelectLocation = (locationOption) => {
    const newActiveLocation = _.find(props.locationOptions, {name: locationOption.value}) || {}
    props.setActiveLocation(newActiveLocation)
  }

  const locationOptions = _.concat(
    {
      label: 'Any',
      value: '',
    },
    _.map(props.locationOptions, (locationOption) => ({
      label: locationOption.label,
      value: locationOption.name,
    }))
  )

  return (
    <This
      className="locationDropdown"
    >
      <Title>
        {props.title}
      </Title>

      <SelectInput 
        onChange={handleSelectLocation}
        options={locationOptions}
        styleType="light"
        value={props.activeLocation.value}
      />
    </This>
  )
}

export default LocationDropdown