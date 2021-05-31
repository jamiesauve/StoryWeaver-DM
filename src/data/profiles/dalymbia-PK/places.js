import colors from '../../styles/colors'
import _ from 'lodash'

import { terrainTypeNames } from '../../generalData/terrainTypes'

const places = {
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