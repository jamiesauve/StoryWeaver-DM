import _ from './node_modules/lodash'

import importedTerrainTypes from '../../terrainTypes'
import tracks from './environmentTracks'

export default (activeLocation) => {
  const terrainTypes = !_.isEmpty(activeLocation) ? [activeLocation] : importedTerrainTypes;

  const restructuredTerrainTypes = _.map(terrainTypes, terrainType => {
    const filteredTracks = _.filter(tracks, trackObject => {
        if (trackObject.terrain) {
          if (_.isEmpty(trackObject.terrain)) {
            return true
          }
  
          const includeTrack = _.includes(trackObject.terrain, activeLocation.name ? activeLocation.name : terrainType.name)

          return includeTrack
        } else if (trackObject.excludeFrom) {
          if (_.isEmpty(trackObject.excludeFrom)) {
            return true
          }
          
          const includeTrack = !_.includes(trackObject.excludeFrom, activeLocation.name ? activeLocation.name : terrainType.name)

          return includeTrack
        } else {
          return true
        }
      })

    const sortedTracks = _.sortBy(filteredTracks, track => track.title)

    return {
      categoryLabel: terrainType.label,
      categoryName: terrainType.name,
      titleColor: terrainType.color,
      trackObjects: sortedTracks,
    }
  })

  return restructuredTerrainTypes
}