import React from 'react'
import styled from  'styled-components'

import { useRecoilValue, } from 'recoil'
import {
  colorsAtom,
} from '../../state/atoms/staticDataAtoms'

import _ from 'lodash'

const This = styled.div`
  display: flex;
  flex-direction: column;
`

const MessageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.isFromSelf ? `flex-start` : `flex-end`};
`
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;

  background: ${props => props.isFromSelf ? props.outgoingColor : props.incomingColor};
  color: white;
  font-size: 14px;
  padding: 5px 10px;
  margin: 3px;
  border-radius: 10px;
`

const MessageDetails = styled.div`
  margin-bottom; 2px;
`

const MessageAuthor = styled.span`
  font-weight: bold;
`

const MessageTimestamp = styled.span`
  font-style: italic;
`

const MessageBody = styled.div``

const Message = props => {
  const {
    from,
    message,
    timestamp,
  } = props

  const colors = useRecoilValue(colorsAtom)

  return (
    <This>
      <MessageRow
        isFromSelf={Boolean(from)}
        >
        <MessageContainer
          isFromSelf={Boolean(from)}
          outgoingColor={colors.freshwaterBlue}
          incomingColor={colors.forestGreen}
        >
          <MessageDetails>
            <MessageAuthor>
              {from || "You"}
            </MessageAuthor>
            {` | `}
            <MessageTimestamp>
              {timestamp}
            </MessageTimestamp>
          </MessageDetails>
          
          <MessageBody>
            {message}
          </MessageBody>
        </MessageContainer>
      </MessageRow>
    </This>
  )
}

export default Message