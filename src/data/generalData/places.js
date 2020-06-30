import colors from '../styles/colors'

import terrainTypes from './terrainTypes'

const [
  caves,
  coast,
  city,
  desert,
  forest,
  freshwater,
  jungle,
  mountains,
  ocean,
  plains,
  swamp,
  village,
  winter,
  exotic,
 ] = Object.keys(terrainTypes)

const places = {
  durukhaaz: {
    label: 'Durukhaaz',
    name: 'durukhaaz',
    color: colors.cavesPurple,
    terrainTypes: [
      caves,
      city,
    ]
  },
}

export default places