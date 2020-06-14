import React from 'react'
import styled from 'styled-components'
import ToggleButtonWithLabels from '../UI/ToggleButtonWithLabels'

const This = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LocationTitle = styled.div`
  margin-right: 10px;

  font-weight: bold;
`

const LocationType = (props) => {

  const locationTypeOptions = [
    {
      label: "Terrain",
      value: "terrain",
    },
    {
      label: "Place",
      value: "place",
    }
  ]

  return (
    <This
      className="locationType"
    >
      <LocationTitle>
        Location Type
      </LocationTitle>

      <ToggleButtonWithLabels
        activeOption={props.activeLocationType}
        setActiveOption={props.setActiveLocationType}
        options={locationTypeOptions}
      />
    </This>
  )
}

export default LocationType