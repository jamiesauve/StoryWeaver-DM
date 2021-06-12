import React from 'react'
import _ from 'lodash'

const TextWithFormattingActivated = (props) => {
  const { 
    text
  } = props
  
  const getTextWithParagraphs = (text) => {
    const paragraphs = text.split('|||');

    return _.map(paragraphs, (paragraph, index) => (
      <p
        key={index}
      >
        {paragraph}
      </p>
    )) 
  }
  
  return <>
    {getTextWithParagraphs(text)}
  </>
}

export default TextWithFormattingActivated