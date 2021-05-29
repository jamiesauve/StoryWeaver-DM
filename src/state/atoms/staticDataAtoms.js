import {
  atom,
} from 'recoil'

export const profilesAtom = atom({
  hey: 'profiles',
  default: [],
})

export const colorsAtom = atom({
  key: 'colors',
  default: {},
})

export const wikiEntryTypesAtom = atom({
  key: 'wikiEntryTypes',
  default: {},
})

export const mp3sAtom = atom({
  key: 'mp3s',
  default: {},
})