import _ from 'lodash'

import tracks from './moodTracks'

export default (activeLocation) => _.map(tracks, (track, categoryLabel) => ({
  ...track,
  categoryLabel
}))