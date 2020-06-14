import React from 'react'
import styled from 'styled-components'
import colors from '../../data/colors'

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${props => props.inactiveBackgroundColor || colors.lightBackGround};

  border-radius: 3px;
  border: ${props => props.hasBorder ? `1px ${props.borderColor} solid` : `none`};
  `
  
  const OptionButton = styled.div`
  flex-grow: 1;
  
  z-index: 0;
  padding: 10px;
  
  text-align: center;
  color: ${props => props.textColor || colors.darkText};

  &:hover {
    background: ${props => props.hoverBackgroundColor || colors.lightBackGroundDimmed}
  }

  ${
    props => props.isActiveOption
    ? `
      background: ${props.activeBackgroundColor};
      font-weight: bold;  
    `
    : props.hasBorder && `
      border-radius: 0 0 5px 5px;
      border-bottom: 1px ${props.borderColor || colors.lightGrey} solid;

      &:not(:first-child) {
        border-left: 1px${props.borderColor || colors.lightGrey} solid;
      }

      &:not(:last-child) {
        border-right: 1px${props.borderColor || colors.lightGrey} solid;
      }
    `
  }
`

const Separator = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  width: ${props => props.isVisible ? `1px` : `0`};
  
  align-self: stretch;

  background: ${props => props.borderColor || colors.lightGrey}
`

const ToggleButtonWithLabels = (props) => {
  const {
    component: componentStyles = {},
    option: optionStlyes = {},
    separator: separatorStyles = {},
  } = props.styles

  const generateOptions = (options) => {

    return options.map((option, index) => (
      <>
        <OptionButton
          activeBackgroundColor={componentStyles.activeBackgroundColor}
          borderColor={componentStyles.borderColor}
          hasBorder={componentStyles.hasBorder}
          hoverBackgroundColor={props.options.color}
          isActiveOption={props.activeOption === option.value}
          onClick={(e) => handleClickOption(e, option.value)}
          textColor={optionStlyes.textColor}
        >
          {option.label}
        </OptionButton>

        {
          index !== (options.length - 1)
          && <Separator 
            borderColor={componentStyles.borderColor}
            isVisible={separatorStyles.isVisible}
          />
        }
      </>
    ))
  }
  

  const handleClickOption = (e, value) => {
    e.preventDefault();

    props.setActiveOption(value)
  }

  return (
    <This
      inactiveBackgroundColor={componentStyles.backgroundColor}
      hasBorder={componentStyles.hasBorder}
      className="toggleButtonWithLabel"
      borderColor={componentStyles.borderColor}
    >
      {generateOptions(props.options)}
    </This>
  )
}

ToggleButtonWithLabels.defaultProps = {
  styles: {}
}

export default ToggleButtonWithLabels

// activeOption={props.activeLocationType}
// setActiveOption={props.setActiveLocationType}
// options={props.locationTypeOptions}