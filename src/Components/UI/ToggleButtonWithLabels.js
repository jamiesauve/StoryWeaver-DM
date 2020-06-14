import React from 'react'
import styled from 'styled-components'
import colors from '../../data/colors'

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${colors.lightBackGround};

  border-radius: 3px;

  color: ${colors.darkText}
`

const OptionButton = styled.div`
  padding: 10px;

  &:hover {
    background: ${colors.lightBackGroundDimmed}
  }

  ${
    props => props.isActiveOption
    && `
      font-weight: bold;
    `
  }
`

const Separator = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  width: 1px;
  
  align-self: stretch;

  background: ${colors.lightGrey}
`

const ToggleButtonWithLabels = (props) => {
  const generateOptions = (options) => (
    options.map((option, index) => (
      <>
        <OptionButton
          isActiveOption={props.activeOption === option.value}
          onClick={(e) => handleClickOption(e, option.value)}
        >
          {option.label}
        </OptionButton>

        {
          index !== (options.length - 1)
          && <Separator />
        }
      </>
    ))
  )

  const handleClickOption = (e, value) => {
    e.preventDefault();
    console.log('clicked', value)
    props.setActiveOption(value)
  }

  return (
    <This
      className="toggleButtonWithLabel"
    >
      {generateOptions(props.options)}
    </This>
  )
}

export default ToggleButtonWithLabels

// activeOption={props.activeLocationType}
// setActiveOption={props.setActiveLocationType}
// options={props.locationTypeOptions}