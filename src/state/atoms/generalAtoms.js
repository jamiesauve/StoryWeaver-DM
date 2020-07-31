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

export const areTabsContractedAtom = atom({
  key: 'areTabsContractedAtom',
  default: false,
})

export const currentWikiLinkAtom = atom({
  key: 'curentWikiLink',
  default: {
    destinationAspect: ``,
    linkTarget: ``,
  }
})