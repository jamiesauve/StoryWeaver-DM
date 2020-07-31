import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import {
  colorsAtom,
} from './atoms/staticDataAtoms'

const baseUrl = 'http://127.0.0.1:4204' // TODO: stick this in a .env file

const StaticDataInitializer = (props) => {
  const [staticDataHasLoaded, setStaticDataHasLoaded] = useState(false)
  const [, setColors] = useRecoilState(colorsAtom)
  
  
  useEffect(() => {
    const getStaticData = async () => {
      const {data} = await axios.get(`${baseUrl}/api/colors`)

      setColors(data.colors)

      setStaticDataHasLoaded(true)
    }

    getStaticData()
  }, [])

  return staticDataHasLoaded 
    ? <>{props.children}</>
    : null
}



export default StaticDataInitializer