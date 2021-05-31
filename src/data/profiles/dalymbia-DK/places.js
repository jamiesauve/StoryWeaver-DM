import colors from '../../styles/colors'
import _ from 'lodash'

import { terrainTypeNames } from '../../generalData/terrainTypes'

const places = {
  abundabar: {
    label: 'Abundabar',
    name: 'abundabar',
    color: colors.mountainsTeal,
    terrainTypes: [
      terrainTypeNames.caves,
    ],
  },
  ambalora: {
    label: 'Ambalora',
    name: 'ambalora',
    color: colors.creepyPurple,
    terrainTypes: [
      terrainTypeNames.caves,
    ],
  },
  dragon_falls: {
    label: 'Dragon Falls',
    name: 'dragon_falls',
    color: colors.oceanBlue,
    terrainTypes: [
      terrainTypeNames.city,
      terrainTypeNames.mountains,
    ],
  },
  durukhaaz: {
    label: 'Durukhaaz',
    name: 'durukhaaz',
    color: colors.cavesPurple,
    terrainTypes: [
      terrainTypeNames.caves,
      terrainTypeNames.city,
    ],
  },
  gwimbledym: {
    label: 'Gwimbledym',
    name: 'gwimbledym',
    color: colors.jungleGreen,
    terrainTypes: [
      terrainTypeNames.forest,
      terrainTypeNames.village,
      terrainTypeNames.freshwater,
    ],
  },
}

export const placeNames = _.reduce(places, (aggr, place) => {
  return {
    ...aggr,
    [place.name]: place.name,
  }
}, {})

export default places