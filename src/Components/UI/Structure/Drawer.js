import React from 'react'
import styled from 'styled-components'

import colors from '../../../data/styles/colors'

const This = styled.div`
  margin-top: 10px;
  
  border-radius: ${props => props.isOpen ? `5px 5px 0 0` : `5px`};
  box-shadow: 0 0 3px ${colors.darkGrey};

  align-items: center;
`
const DrawerFace = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 7px;
  background-color: ${props => props.titleColor};

  color: ${props => props.titleColor === colors.winterWhite ? colors.darkGrey : `inherit`} // TODO: make this flip for all too-light colors, not just winterWhite
`

const DrawerThird = styled.div`
  width: ${100 / 3}%;
`

const DrawerTitle = styled.div`
  margin-bottom: 7px;
  font-weight: bold;

  text-align: center;
`

const TitleDetail = styled.div`
  padding-right: 10px;

  text-align: right;
  font-style: italic;
`


const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: ${colors.mediumBackground};
`

const Drawer =  props => {
  const DrawerContent = props.content

  const handleClickTitle = () => {
    props.isOpen 
      ? props.closeSelf()
      : props.openSelf()
  }

  return (
    <This
      className="Drawer"
      isOpen={props.isOpen}
    >
      <DrawerFace
        className="drawerFace"
        titleColor={props.titleColor}
        onClick={handleClickTitle}
      >
        <DrawerThird />

        <DrawerThird>
          <DrawerTitle>
            {props.title}
          </DrawerTitle>
        </DrawerThird>

        <DrawerThird>
          {props.titleDetail
            && <TitleDetail>
              {props.titleDetail}
            </TitleDetail>
          }
        </DrawerThird>
      </DrawerFace>

      {
        props.isOpen
        && <DrawerBody
          className="drawerBody"
        >
          <DrawerContent />
        </DrawerBody>
      }
    </This>
  )
}

export default Drawer