import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import appTheme from '../../../data/styles/theme'

import shade from '../../../utils/shade'

const This = styled.div`
  width: ${props => props.width || `250px`};
`

const SelectInput = (props) => {
  const {
    styleType,
    backgroundColor,
  } = props

  const styles = {
      backgroundColor: `#333`,
      menu: (existingStyles => ({
        ...existingStyles,
        color: styleType === "light" ? '#444': appTheme.lightGreyText,
      })),
    }

    const theme = (styleType === "light")
      ? (theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#444',
          primary25: backgroundColor,
          primary50: '#aaa',
        }
      })
      : (theme) => {
        const borderColorWhenDropdownIsOpen = backgroundColor
        const borderColorWhenInactive = backgroundColor
        const borderColorWhenHovering = shade(backgroundColor, 30)
        const backgroundOfInput = shade(backgroundColor, -70)
        const backgroundOfDropdownList = shade(backgroundColor, -70)
        const backgroundOfSelectedItemOnMouseDown = backgroundColor
        
        return {
          ...theme,
          colors: {
            ...theme.colors,
            primary: borderColorWhenDropdownIsOpen,
            primary25: backgroundOfDropdownList,
            primary50: backgroundOfSelectedItemOnMouseDown,
            neutral0: backgroundOfInput,
            neutral20: borderColorWhenInactive,
            neutral30: borderColorWhenHovering,        
          }
        }
    }


  return (
    <This
      width={props.width}
    >
      <Select 
        options={props.options}
        styles={styles}
        theme={theme}
        value={props.value}
        {...props}
      />
    </This>
  )
}

SelectInput.defaultProps = {
  backgroundColor: '#eee',
}

export default SelectInput