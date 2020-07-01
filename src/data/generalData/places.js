import colors from '../styles/colors'
import _ from 'lodash'

import { terrainTypeNames } from './terrainTypes'

const places = {
  durukhaaz: {
    label: 'Durukhaaz',
    name: 'durukhaaz',
    color: colors.cavesPurple,
    terrainTypes: [
      terrainTypeNames.caves,
      terrainTypeNames.city,
    ]
  },
}

export const placeNames = _.reduce(places, (aggr, place) => {
  return {
    ...aggr,
    [place.name]: place.name,
  }
}, {})

export default places