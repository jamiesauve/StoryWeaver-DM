import _ from 'lodash'

import importedTerrainTypes from './terrainTypes'
import tracks from './environmentTracks'

export default (activeLocation) => {
  const terrainTypes = activeLocation ? [_.find(importedTerrainTypes, {name: activeLocation})] : importedTerrainTypes;

  const restructuredTerrainTypes = _.map(terrainTypes, terrainType => {
    const filteredTracks = _.filter(tracks, trackObject => {
        if (trackObject.terrain) {
          if (_.isEmpty(trackObject.terrain)) {
            return true
          }
  
          const includeTrack = _.includes(trackObject.terrain, activeLocation ? activeLocation : terrainType.name)

          return includeTrack
        } else if (trackObject.excludeFrom) {
          if (_.isEmpty(trackObject.excludeFrom)) {
            return true
          }
          
          const includeTrack = !_.includes(trackObject.excludeFrom, activeLocation ? activeLocation : terrainType.name)

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