import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import MessageLog from '../Components/Gameplay/MessageLog'

import Divider from '../Components/UI/Structure/Divider'
import Section from '../Components/UI/Structure/Section'

import ScrollableContainer from '../Components/UI/Structure/ScrollableContainer'
import TextInput from '../Components/UI/Action/TextInput'

const This = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;
`

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Gameplay = props => {
  return (
    <This
    className="gameplay"
    >
      <Section
        className="section"
      >
        <ScrollableContainer
          className="scrollableContainer"
        >
          <MessageLog 

          />
        </ScrollableContainer>

        <Divider />

        <ChatBox>
          <TextInput
            placeholder="press enter to send"
            width={`100%`}
          />
        </ChatBox>
      </Section>
    </This>
  )
}

export default Gameplay