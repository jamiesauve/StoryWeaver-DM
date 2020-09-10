import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import {
  colorsAtom,
  wikiEntryTypesAtom,
} from './atoms/staticDataAtoms'

const callDatabase = window.callDatabase

const baseUrl = 'http://127.0.0.1:4204' // TODO: stick this in a .env file

const StaticDataInitializer = (props) => {
  const [staticDataHasLoaded, setStaticDataHasLoaded] = useState(false)
  const [, setColors] = useRecoilState(colorsAtom)
  const [, setWikiEntryTypes] = useRecoilState(wikiEntryTypesAtom)
  
  useEffect(() => {
    const getStaticData = async () => {
      const {error, result } = await window.callDatabase(`/api/staticData`)
      if (error) throw error;

      const {
        colors,
        wikiEntryTypes,
      } = result

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