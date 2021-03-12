import React, { useState, useEffect } from 'react'

import Section from '../UI/Structure/Section'
import TextArea from '../UI/Action/TextArea'

const SessionEvents = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('storyWeaverSessionEvents')) || '')

  useEffect(() => {
    saveValue()
  }, [value])

  const saveValue = () => {
    localStorage.setItem('storyWeaverSessionEvents', JSON.stringify(value))
  } 

  return (
    <Section
      title="Session Events"
    >
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Section>
  )
}

export default SessionEvents