import React from 'react'

import BulletList from './List'

const Description = (props) => {
  const {
    borderColor,
    text,
    heading,
  } = props
  
  return (
    <BulletList
      borderColor={borderColor}
      heading={heading}
      items={[text]}
    />
  )
}

export default Description