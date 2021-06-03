import React, { Fragment, } from 'react'
import styled from 'styled-components'
import theme from '../../../data/styles/theme'

import {Draggable } from 'react-beautiful-dnd'

import shade from '../../../utils/shade'

const This = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: normal;

  background: ${props => props.backgroundColor || theme.lightBackground};

  border-radius: 3px;
  border: ${props => props.hasBorder ? `1px ${props.borderColor} solid` : `none`};
`
  
const OptionButton = styled.div`
  z-index: 0;
  padding: 10px;

  width: ${props => props.width};
  
  background: ${props => props.backgroundColor};
  
  text-align: center;
  color: ${props => props.textColor || theme.darkText};

  ${
    props => props.isActiveOption
      ? `
        font-weight: bold;  
      `
      : `
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        
        ${props.hasBorder 
          && `
            border-radius: 0 0 5px 5px;
            border-bottom: 1px ${props.borderColor || theme.lightGreyText} solid;

            background: ${shade(props.backgroundColor, -50)};

            color: ${shade(props.textColor || theme.darkText, -40)};

            &:not(:first-child) {
              border-left: 1px${props.borderColor || theme.lightGreyText} solid;
            }

            &:not(:last-child) {
              border-right: 1px${props.borderColor || theme.lightGreyText} solid;
            }
          `
        }
      `
  }
`

const Separator = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  width: ${props => props.isVisible ? `1px` : `0`};
  
  align-self: stretch;

  background: ${props => props.borderColor || theme.lightGreyText}
`

const ToggleButtonGroup = (props) => {
  const {
    component: componentStyles = {},
    option: optionStyles = {},
    separator: separatorStyles = {},
  } = props.styles

  const generateOptions = (options) => {
    return options.map((option, index) => (
      <Fragment 
        key = {option.value}
      >
        {props.usesDragAndDrop
          ? <Draggable
          draggableId={option.value}
          index={index}
        >  
          {provided => (
            <OptionButton
              className={"option"}
            
              {...provided.draggableProps}
              {...provided.dragHandleProps} // handle to move the item with
              ref={provided.innerRef}
              
              width={props.areTabsContracted ? `${100 / (options.length + 2)}%` : `${100 / options.length}%`}
              
              backgroundColor={option.color}
              borderColor={componentStyles.borderColor}
              hasBorder={componentStyles.hasBorder}
              isActiveOption={props.activeOption === option.value}
              onClick={(e) => handleClickOption(e, option.value)}
              textColor={optionStyles.textColor}
            >
              {option.label}
            </OptionButton>
          )}
        </Draggable>
        : <OptionButton
            backgroundColor={option.color}
            borderColor={componentStyles.borderColor}
            hasBorder={componentStyles.hasBorder}
            isActiveOption={props.activeOption === option.value}
            onClick={(e) => handleClickOption(e, option.value)}
            textColor={optionStyles.textColor}
          >
            {option.label}
          </OptionButton>
        }
        

        {
          index !== (options.length - 1)
          && <Separator 
            borderColor={componentStyles.borderColor}
            isVisible={separatorStyles.isVisible}
          />
        }
      </Fragment>
    ))
  }
  

  const handleClickOption = (e, value) => {
    e.preventDefault();

    props.setActiveOption(value)
  }

  return (
    <This
      backgroundColor={componentStyles.backgroundColor}
      hasBorder={componentStyles.hasBorder}
      className="toggleButtonWithLabel"
      borderColor={componentStyles.borderColor}
    >
      {generateOptions(props.options)}
    </This>
  )
}

ToggleButtonGroup.defaultProps = {
  styles: {}
}

export default ToggleButtonGroup