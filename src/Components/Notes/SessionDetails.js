import React, { useState, useEffect } from 'react'

import Section from '../UI/Structure/Section'
import TextArea from '../UI/Action/TextArea'

const SessionDetails = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('storyWeaverSessionDetails')) || '')

  useEffect(() => {
    saveValue()
  }, [value])

  const saveValue = () => {
    localStorage.setItem('storyWeaverSessionDetails', JSON.stringify(value))
  } 

  return (
    <Section
      title="Session Details"
    >
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Section>
  )
}

export default SessionDetails