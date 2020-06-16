// Aspects
import Ambiences from '../Containers/Ambiences'
import Creatures from '../Containers/Creatures'
// Gameplay
import Notes from '../Containers/Notes'
// NPCs
import Reagents from '../Containers/Reagents'
// Recipes
import Search from '../Containers/Search'

import colors from '../data/colors'

const Aspects = {
  "notes": {
    component: () => Notes,
    color: colors.plainsYellow,
    name: "notes",
    label: "Notes",
  },
  "ambiences": {
    component: () => Ambiences,
    color: colors.magicPink,
    name: "ambiences",
    label: "Ambiences",
  },
  "reagents": {
    component: () => Reagents,
    color: colors.forestGreen,
    name: "reagents",
    label: "Reagents",
  },
  "search": {
    component: () => Search,
    color: colors.creepyPurple,
    name: "search",
    label: "Search",
  },
  "creatures": {
    component: () => Creatures,
    color: colors.puzzleOrange,
    name: "creatures",
    label: "Creatures",
  },
}

export default Aspects