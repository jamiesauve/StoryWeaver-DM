import colors from '../../styles/colors'
import _ from 'lodash'

import { terrainTypeNames } from '../../generalData/terrainTypes'

const places = {
  port_maruna: {
    label: 'Port Maruna',
    name: 'port_maruna',
    color: colors.coastBlue,
    terrainTypes: [
      terrainTypeNames.coast,
      terrainTypeNames.city,
    ],
  },
  sing_harbors: {
    label: 'Sing Harbors',
    name: 'sing_harbors',
    color: colors.magicPink,
    terrainTypes: [
      terrainTypeNames.coast,
      terrainTypeNames.city,
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