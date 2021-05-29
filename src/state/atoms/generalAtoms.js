import {
  atom,
} from 'recoil'

export const activeLocationAtom = atom({
  key: 'activeLocation',
  default: {},
})

export const activeLocationTypeAtom = atom({
  key: 'activeLocationType',
  default: 'any',
})

export const ambiencesAtom = atom({
  key: 'ambiencesAtom',
  default: {},
})

export const areTabsContractedAtom = atom({
  key: 'areTabsContractedAtom',
  default: false,
})

export const craftingAtom = atom({
  key: 'craftingAtom',
  default: {},
})

export const creaturesAtom = atom({
  key: 'creaturesAtom',
  default: {},
})

export const currentWikiLinkAtom = atom({
  key: 'curentWikiLink',
  default: {
    destinationAspect: ``,
    linkTarget: ``,
  }
})

export const searchAtom = atom({
  key: 'searchAtom',
  default: {},
})