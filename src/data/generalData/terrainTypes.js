import colors from '../styles/colors'
import _ from 'lodash'

const terrainTypes = {
  caves: {
    label: 'Caves',
    name: 'caves',
    color: colors.cavesPurple,
  },
  coast: {
    label: 'Coast',
    name: 'coast',
    color: colors.coastBlue,
  },
  city: {
    label: 'City',
    name: 'city',
    color: colors.citySalmon,
  },
  desert: {
    label: 'Desert',
    name: 'desert',
    color: colors.desertOrange,
  },
  forest: {
    label: 'Forest',
    name: 'forest',
    color: colors.forestGreen,
  },
  freshwater: {
    label: 'Freshwater',
    name: 'freshwater',
    color: colors.freshwaterBlue,
  },
  jungle: {
    label: 'Jungle',
    name: 'jungle',
    color: colors.jungleGreen,
  },
  mountains: {
    label: 'Mountains',
    name: 'mountains',
    color: colors.mountainsTeal,
  },
  ocean: {
    label: 'Ocean',
    name: 'ocean',
    color: colors.oceanBlue,
  },
  plains: {
    label: 'Plains',
    name: 'plains',
    color: colors.plainsYellow,
  },
  swamp: {
    label: 'Swamp',
    name: 'swamp',
    color: colors.swampGreen,
  },
  village: {
    label: 'Village',
    name: 'village',
    color: colors.villageBrown,
  },
  winter: {
    label: 'Winter',
    name: 'winter',
    color: colors.winterWhite,
  },
  exotic: {
    label: 'Exotic',
    name: 'exotic',
    color: colors.exoticPink,
  }
}

export const terrainTypeNames = _.reduce(terrainTypes, (aggr, terrainType) => {
  return {
    ...aggr,
    [terrainType.name]: terrainType.name,
  }
}, {})

export default terrainTypes