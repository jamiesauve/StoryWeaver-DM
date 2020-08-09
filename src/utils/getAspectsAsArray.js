// Aspects
import Ambiences from '../Containers/Ambiences'
import Creatures from '../Containers/Creatures'
import Gameplay from '../Containers/Gameplay'
import Items from '../Containers/Items'
import Notes from '../Containers/Notes'
import People from '../Containers/People'
import Wiki from '../Containers/Wiki'
import Crafting from '../Containers/Crafting'
import Search from '../Containers/Search'

import colors from '../data/styles/colors'

const Aspects = [
  {
    component: () => Notes,
    color: colors.plainsYellow,
    defaultSlot: 0,
    defaultIndex: 0,
    name: "notes",
    label: "Notes",
  },
  {
    component: () => Search,
    color: colors.creepyPurple,
    defaultSlot: 0,
    defaultIndex: 1,
    name: "search",
    label: "Search",
  },
  {
    component: () => Ambiences,
    color: colors.magicPink,
    defaultSlot: 1,
    defaultIndex: 0,
    name: "ambiences",
    label: "Ambiences",
  },
  {
    component: () => Wiki,
    color: colors.mountainsTeal,
    defaultSlot: 1,
    defaultIndex: 1,
    name: "wiki",
    label: "Wiki",
  },
  {
    component: () => People,
    color: colors.oceanBlue,
    defaultSlot: 2,
    defaultIndex: 0,
    name: "people",
    label: "People",
  },
  {
    component: () => Creatures,
    color: colors.puzzleOrange,
    defaultSlot: 2,
    defaultIndex: 1,
    name: "creatures",
    label: "Creatures",
  },
  {
    component: () => Crafting,
    color: colors.forestGreen,
    defaultSlot: 3,
    defaultIndex: 0,
    name: "crafting",
    label: "Crafting",
  },
  {
    component: () => Items,
    color: colors.exoticPink,
    defaultSlot: 3,
    defaultIndex: 1,
    name: "items",
    label: "Items",
  },
  {
    component: () => Gameplay,
    color: colors.battleRed,
    defaultSlot: 4,
    defaultIndex: 0,
    name: "gameplay",
    label: "Gameplay",
  },
]

export default Aspects