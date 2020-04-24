import _ from 'lodash'

import tracks from './moodTracks'

export default (activeTerrain) => _.map(tracks, (track, categoryName) => ({
  ...track,
  categoryName
}))