import _ from 'lodash'

import categories from './moodTracks'



export default (activeLocationType, activeLocation) => _.reduce(Object.entries(categories), (aggr, [categoryLabel, category]) => {  
  const filteredTracks = _.chain(category.trackObjects)
    .map(track => {
      if (!_.isUndefined(track.excludeFrom) && activeLocationType === "terrain" && _.includes(track.excludeFrom, activeLocation.name)) return null

      return track
    })
    .compact()
    .value()

  return [
    ...aggr,
    {
      ...category,
      categoryLabel,
      trackObjects: filteredTracks,
    }
  ]
}, [])
