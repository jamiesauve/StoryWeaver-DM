import React from 'react'
import styled from  'styled-components'

import Message from './Message'

import _ from 'lodash'

const This = styled.div``

const MessageLog = props => {
  const exampleMessages = [{
    from: "Talia",
    message: "Did I hear what Bilgrim said to Kana?",
    timestamp: "2 min ago",
  }, {
    from: null, // self
    message: "No, the water is too loud, sorry",
    timestamp: "2 min ago",
  }, {
    from: "Talia",
    message: "ok",
    timestamp: "1 min ago",
  }]

  const getExampleMessages = (exampleMessages) => {
    return _.map(exampleMessages, (exampleMessage, index) => (
      <Message 
        key={index}
        {...exampleMessage}
      />
    ))
  }

  return (
    <This>
      {getExampleMessages(exampleMessages)}
    </This>
  )
}

export default MessageLog