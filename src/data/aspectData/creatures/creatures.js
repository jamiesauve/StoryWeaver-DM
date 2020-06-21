import terrainTypes from '../../generalData/terrainTypes'

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

const creatures = [
  {
    label: "Hermit Crab",
    name: "hermit-crab",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Crab",
    name: "crab",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Lobster",
    name: "lobster",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Fish",
    name: "fish",
    terrain: [
      caves
    ],
    location: "water",
  },
  {
    label: "Squid",
    name: "squid",
    terrain: [
      caves
    ],
    location: "water",
  },
  {
    label: "Octopus",
    name: "octopus",
    terrain: [
      caves
    ],
    location: "water",
  },
  {
    label: "Snail",
    name: "smail",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Slug",
    name: "slug",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Turtle",
    name: "turtle",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "Frog",
    name: "frog",
    terrain: [
      caves
    ],
    location: "near water",
  },
  {
    label: "rats, nifflers, night squirrels, cave monkeys (in forests), toads, beetles, and centipedes",
    name: "cheat",
    terrain: [
      caves
    ],
    location: "dry areas",
  },
  {
    label: "bugs, bats, ghost jellyfish, moths, and cave owls",
    name: "cheat2",
    terrain: [
      caves
    ],
    location: "flying",
  },
  
]

export default creatures