import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import {
  // colorsAtom,
  // wikiEntryTypesAtom,
  mp3sAtom,
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


const baseUrl = 'http://127.0.0.1:4204' // TODO: stick this in a .env file

const importMp3 = async (trackName) => {
  const { default: mp3 } = await import(`../assets/ambiences/${trackName}`);
  return mp3;
}

const importMp3s = async (trackNames) => {
  const mp3sAsArray = Promise.all(trackNames.map(async (trackName) => {

    return {
      name: trackName,
      track: await importMp3(trackName),
    }
  }))

  const mp3s = (await mp3sAsArray).reduce((aggr, mp3Entry) => {
    return {
      ...aggr,
      [mp3Entry.name]: mp3Entry.track,
    };
  }, {})

  return mp3s;
}

const StaticDataInitializer = (props) => {
  const [staticDataHasLoaded, setStaticDataHasLoaded] = useState(false)
  const [, setMp3s] = useRecoilState(mp3sAtom)
  
  useEffect(() => {
    const getStaticData = async () => {     
      const result = await axios.get(`${baseUrl}/`)
      const trackNames = result.data
      const mp3s = await importMp3s(trackNames); 
      setMp3s(mp3s)

      setStaticDataHasLoaded(true)
    }

    getStaticData()
  }, [])

  return staticDataHasLoaded 
    ? <>{props.children}</>
    : null
}



export default StaticDataInitializer