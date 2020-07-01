// TODO: Refactor/clean up this file

import _ from 'lodash'

import importedTerrainTypes from '../../generalData/terrainTypes'
import importedPlaces from '../../generalData/places'

import tracks from './environmentTracks'

export default (activeLocationType, activeLocation) => {
  const importedLocations = activeLocationType === "terrain"
    ? importedTerrainTypes
    : activeLocationType === "place"
      ? importedPlaces
      : {
        ...importedTerrainTypes,
        ...importedPlaces,
      }

  const locationTypes = !_.isEmpty(activeLocation) ? [activeLocation] : importedLocations;

  const restructuredLocationTypes = _.map(locationTypes, location => {
    const filteredTracks = _.filter(tracks, trackObject => {
      if (_.isEmpty(trackObject.terrain)) {
        return true
      }

      const includeTrack = shouldIncludeTrack(trackObject, activeLocation, activeLocationType, location);
      return includeTrack
    })

    const retitledTracks = activeLocationType === "place"
      ? _.map(filteredTracks, trackObject => {
        const trackForThisPlace = _.find(_.get(trackObject, 'places', {}), {name: (activeLocation.name || location.name)})
        const trackTitle = trackForThisPlace ? trackForThisPlace.trackTitle : trackObject.title

        return {
          ...trackObject,
          title: trackTitle
        }
      })
      : filteredTracks

    const sortedTracks = _.sortBy(retitledTracks, track => track.title)

    return {
      categoryLabel: location.label,
      categoryName: location.name,
      titleColor: location.color,
      trackObjects: sortedTracks,
    }
  })

  return restructuredLocationTypes
}

const shouldIncludeTrack = (trackObject, activeLocation, activeLocationType, location) => {
  if (activeLocationType === "terrain") {
    return _.includes(trackObject.terrain, activeLocation.name ? activeLocation.name : location.name)

  } else if (activeLocationType === "place") {
    
    const placeNamesInTrack = _.get(trackObject, 'places')
    ? _.map(trackObject.places, place => place.name)
    : false

    return _.includes(placeNamesInTrack, activeLocation.name ? activeLocation.name : location.name)

  } else {
    const matchByTerrain =  _.get(trackObject, 'terrain', []).includes(location.name)

    const places =  _.map(_.get(trackObject, 'places', []), place => place.name)

    const matchByPlace = _.includes(places, location.name)

    return matchByTerrain || matchByPlace
  }
}