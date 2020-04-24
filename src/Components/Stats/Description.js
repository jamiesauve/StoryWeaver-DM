import React from 'react'

import BulletList from './BulletList'

const Description = (props) => {
  const {
    color,
    text,
    heading,
  } = props
  
  return (
    <BulletList
      color={color}
      heading={heading}
      items={[text]}
    />
  )
}

export default Description