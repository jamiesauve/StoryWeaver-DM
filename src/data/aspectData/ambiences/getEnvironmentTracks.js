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

  const restructuredLocationTypes = _.map(locationTypes, locationType => {
    const filteredTracks = _.filter(tracks, trackObject => {
        if (trackObject.terrain) {
          if (_.isEmpty(trackObject.terrain)) {
            return true
          }
  
          const includeTrack = shouldIncludeTrack(trackObject, activeLocation, activeLocationType, locationType);

          return includeTrack
        } else if (trackObject.excludeFrom) {
          if (_.isEmpty(trackObject.excludeFrom)) {
            return true
          }
          const currentLocationName = activeLocation.name || locationType.name
          let includeTrack

          const place = _.find(importedPlaces, {name: currentLocationName})

          if (!_.isUndefined(place)) {
            // place
            const matchingTerrains = _.filter(place.terrainTypes, placeTerrainType => !_.includes(trackObject.excludeFrom, placeTerrainType))

            includeTrack = !_.isEmpty(matchingTerrains)

          } else {
            // terrain
            includeTrack = !_.includes(trackObject.excludeFrom, currentLocationName)
          }


          return includeTrack
        } else {
          return true
        }
      })

    const retitledTracks = activeLocationType === "place"
      ? _.map(filteredTracks, trackObject => {
        const trackForThisPlace = _.find(_.get(trackObject, 'places', {}), {name: (activeLocation.name || locationType.name)})
        const trackTitle = trackForThisPlace ? trackForThisPlace.trackTitle : trackObject.title

        return {
          ...trackObject,
          title: trackTitle
        }
      })
      : filteredTracks

    const sortedTracks = _.sortBy(retitledTracks, track => track.title)

    return {
      categoryLabel: locationType.label,
      categoryName: locationType.name,
      titleColor: locationType.color,
      trackObjects: sortedTracks,
    }
  })

  return restructuredLocationTypes
}

const shouldIncludeTrack = (trackObject, activeLocation, activeLocationType, locationType) => {
  if (activeLocationType === "terrain") {
    
    return _.includes(trackObject.terrain, activeLocation.name ? activeLocation.name : locationType.name)

  } else if (activeLocationType === "place") {
    
    const placeNamesInTrack = _.get(trackObject, 'places')
    ? _.map(trackObject.places, place => place.name)
    : false

    return _.includes(placeNamesInTrack, activeLocation.name ? activeLocation.name : locationType.name)

  } else {  
    return true // activeLocationType is "any"
  }
}