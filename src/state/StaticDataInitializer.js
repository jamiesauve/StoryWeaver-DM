import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import {
  colorsAtom,
  wikiEntryTypesAtom,
} from './atoms/staticDataAtoms'

// can't use the sqlite3 database on Mac Silicon for now :(
// const callDatabase = window.callDatabase

// instead, load colors from here manually:
const colors = {
  "villageBrown": "#a85",
  "swampGreen": "#575",
  "plainsYellow": "#da0",
  "oceanBlue": "#17d",
  "mountainsTeal": "#589",
  "jungleGreen": "#373",
  "freshwaterBlue": "#49d",
  "forestGreen": "#292",
  "coastBlue": "#33d",
  "cavesPurple": "#737",
  "tavernSalmon": "#c43",
  "weatherBlue": "#45e",
  "creepyPurple": "#448",
  "magicPink": "#a4a",
  "winterWhite": "#fff",
  "puzzleOrange": "#d50",
  "exploringTeal": "#099",
  "battleRed": "#a01",
};

const wikiEntryTypes = {
  place: [
    "city",
    "ruined city",
  ],
};

// const baseUrl = 'http://127.0.0.1:4204' // TODO: stick this in a .env file

const StaticDataInitializer = (props) => {
  const [staticDataHasLoaded, setStaticDataHasLoaded] = useState(false)
  const [, setColors] = useRecoilState(colorsAtom)
  const [, setWikiEntryTypes] = useRecoilState(wikiEntryTypesAtom)
  
  useEffect(() => {
    const getStaticData = async () => {
      // const {error, result } = await window.callDatabase(`/api/staticData`)
      // if (error) throw error;

      // const {
      //   colors,
      //   wikiEntryTypes,
      // } = result

      setColors(colors)
      setWikiEntryTypes(wikiEntryTypes)

      setStaticDataHasLoaded(true)
    }

    getStaticData()
  }, [])

  return staticDataHasLoaded 
    ? <>{props.children}</>
    : null
}



export default StaticDataInitializer