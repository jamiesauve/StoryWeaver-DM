import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import {
  // colorsAtom,
  // wikiEntryTypesAtom,
  mp3sAtom,
} from './atoms/staticDataAtoms'

const callDatabase = window.callDatabase

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
      const {error, result } = await window.callDatabase(`/api/staticData`)
      if (error) throw error;

      const {
        colors,
        wikiEntryTypes,
      } = result

      const result = await axios.get(`${baseUrl}/api/trackNames`)
      const trackNames = result.data
      const mp3s = await importMp3s(trackNames); 
      
      setMp3s(mp3s)
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