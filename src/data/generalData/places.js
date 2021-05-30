import colors from '../styles/colors'
import _ from 'lodash'

import { terrainTypeNames } from './terrainTypes'

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
  port_maruna_pk: {
    label: 'Port Maruna (PK)',
    name: 'port_maruna_pk',
    color: colors.coastBlue,
    terrainTypes: [
      terrainTypeNames.coast,
      terrainTypeNames.city,
    ],
  }
}

export const placeNames = _.reduce(places, (aggr, place) => {
  return {
    ...aggr,
    [place.name]: place.name,
  }
}, {})

export default places