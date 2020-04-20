import React from 'react'

import BulletList from './BulletList'

const Description = (props) => {
  const {
    backgroundColor,
    text,
    heading,
  } = props
  
  return (
    <BulletList
      backgroundColor={backgroundColor}
      heading={heading}
      items={[text]}
    />
  )
}

export default Description