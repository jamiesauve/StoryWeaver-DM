import _ from 'lodash'

const wikiEntryTypes = {
  place: [
    'city',
    'culture',
    'geography',
    'history',
    'neighborhood',
    'lake',
    'ruined city',
    'town',
  ],
  faction: [
    'family',
    'guild',
  ],
  directory: [
    'directory',
  ]
}

const mappedWikiEntryTypes = _.reduce(Object.entries(wikiEntryTypes), (aggr, wikiEntryGroup) => {
  const mainType = wikiEntryGroup[0]
  
  return {
    ...aggr,
    [mainType]: _.reduce(wikiEntryGroup[1], (aggr, subType) => ({
      ...aggr,
      [subType]: {
        mainType,
        subType,
      },
    }), {})
  }
}, {})

export default mappedWikiEntryTypes