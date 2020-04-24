import _ from 'lodash'

import * as importedTerrainTypes from './terrainTypes'
import tracks from './environmentTracks'

import toCapitalCase from '../utils/toCapitalCase'

export default (activeTerrain) => {
  const terrainTypes = activeTerrain ? [_.find(importedTerrainTypes, {name: activeTerrain})] : importedTerrainTypes;

  const restructuredTerrainTypes = _.map(terrainTypes, terrainType => {
    const filteredTracks = _.filter(tracks, trackObject => {
        if (_.isEmpty(trackObject.terrain)) {
          return true
        }
        const includes = _.includes(trackObject.terrain, activeTerrain ? activeTerrain : terrainType.name)
        return includes
      })

    const sortedTracks = _.sortBy(filteredTracks, track => track.title)

    return {
      categoryName: toCapitalCase(terrainType.name),
      titleColor: terrainType.color,
      trackObjects: sortedTracks,
    }
  })

  return restructuredTerrainTypes
}