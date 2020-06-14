import React from 'react'
import styled from 'styled-components'
import colors from '../../data/colors'

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${props => props.backgroundColor || colors.lightBackGround};

  border-radius: 3px;
  border: ${props => props.border ? props.border : `none`};

  color: ${props => props.textColor || colors.darkText}
`

const OptionButton = styled.div`
  flex-grow: 1;

  z-index: 0;
  padding: 10px;

  text-align: center;

  &:hover {
    background: ${props => props.hoverBackgroundColor || colors.lightBackGroundDimmed}
  }

  ${
    props => props.isActiveOption 
    ? `font-weight: bold;`
    : `border-bottom: 1px ${props.innerColor || colors.lightGrey} solid;`
  }
`

const Separator = styled.div`
  ${props => props.areOptionsFullySeparated || `margin: 5px 0;`}
  padding: 5px 0;
  width: 1px;
  
  align-self: stretch;

  background: ${props => props.innerColor || colors.lightGrey}
`

const ToggleButtonWithLabels = (props) => {
  const generateOptions = (options) => (
    options.map((option, index) => (
      <>
        <OptionButton
          isActiveOption={props.activeOption === option.value}
          innerColor={props.innerColor}
          hoverBackgroundColor={props.hoverBackgroundColor}
          onClick={(e) => handleClickOption(e, option.value)}
        >
          {option.label}
        </OptionButton>

        {
          index !== (options.length - 1)
          && <Separator 
            innerColor={props.innerColor}
            areOptionsFullySeparated={props.areOptionsFullySeparated}
          />
        }
      </>
    ))
  )

  const handleClickOption = (e, value) => {
    e.preventDefault();

    props.setActiveOption(value)
  }

  return (
    <This
      backgroundColor={props.backgroundColor}
      border={props.border}
      className="toggleButtonWithLabel"
      textColor={props.textColor}
    >
      {generateOptions(props.options)}
    </This>
  )
}

export default ToggleButtonWithLabels

// activeOption={props.activeLocationType}
// setActiveOption={props.setActiveLocationType}
// options={props.locationTypeOptions}