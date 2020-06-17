// Aspects
import Ambiences from '../Containers/Ambiences'
import Creatures from '../Containers/Creatures'
import Gameplay from '../Containers/Gameplay'
import Notes from '../Containers/Notes'
import People from '../Containers/People'
import Places from '../Containers/Places'
import Crafting from '../Containers/Crafting'
import Search from '../Containers/Search'

import colors from '../data/colors'

const Aspects = [
  {
    component: () => Notes,
    color: colors.plainsYellow,
    defaultAspectSlot: 0,
    name: "notes",
    label: "Notes",
  },
  {
    component: () => Search,
    color: colors.creepyPurple,
    defaultAspectSlot: 0,
    name: "search",
    label: "Search",
  },
  {
    component: () => Ambiences,
    color: colors.magicPink,
    defaultAspectSlot: 1,
    name: "ambiences",
    label: "Ambiences",
  },
  {
    component: () => Places,
    color: colors.mountainsTeal,
    defaultAspectSlot: 1,
    name: "places",
    label: "Places",
  },
  {
    component: () => People,
    color: colors.oceanBlue,
    defaultAspectSlot: 2,
    name: "people",
    label: "People 1",
  },
  {
    component: () => Creatures,
    color: colors.puzzleOrange,
    defaultAspectSlot: 2,
    name: "creatures",
    label: "Creatures",
  },
  {
    component: () => Crafting,
    color: colors.forestGreen,
    defaultAspectSlot: 3,
    name: "crafting",
    label: "Crafting",
  },
  {
    component: () => People,
    color: colors.oceanBlue,
    defaultAspectSlot: 3,
    name: "people",
    label: "People 2",
  },
  {
    component: () => Gameplay,
    color: colors.battleRed,
    defaultAspectSlot: 4,
    name: "gameplay",
    label: "Gameplay",
  },
]

export default Aspects