import React from 'react'
import styled from 'styled-components'
import ToggleButtonGroup from '../UI/ToggleButtonGroup'

import locationTypeOptions from '../../data/locationTypeOptions'

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

  const toggleButtonStyles = {
    separator: {
      isVisible: true,
    }
  }

  return (
    <This
      className="locationType"
    >
      <LocationTitle>
        Location Type
      </LocationTitle>

      <ToggleButtonGroup
        activeOption={props.activeLocationType}
        setActiveOption={props.setActiveLocationType}
        options={locationTypeOptions}
        styles={toggleButtonStyles}
      />
    </This>
  )
}

export default LocationType