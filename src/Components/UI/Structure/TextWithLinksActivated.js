import React from 'react'
import _ from 'lodash'

import Link from '../Action/Link'

const TextWithLinksActivated = props => {
  const segmentsAndLinks = props.text.split(`;;;`)

  const segments = []
  const linkConfigs = []

  _.forEach(segmentsAndLinks, (segmentOrLink, index) => {
    (index % 2 === 0)
    ? segments.push(segmentOrLink)
    : linkConfigs.push(segmentOrLink)
  })

  const links = _.map(linkConfigs, linkConfig => {
    const [
      label,
      destination,
    ] = linkConfig.split('%%%')

    return (
      <Link
        destination={destination}
        key={`${label}-${destination}`}
        label={label}
        
      />
    )
  })

  const textWithLinksActivated = []
  
  _.forEach(segments, (segment, index) => {
    textWithLinksActivated.push(segment)
    textWithLinksActivated.push(links[index] || ``)
  })

  return textWithLinksActivated
}

export default TextWithLinksActivated