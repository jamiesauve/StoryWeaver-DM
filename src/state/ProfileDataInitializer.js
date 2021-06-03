import React, { useState, useEffect } from 'react'

import { useRecoilState } from 'recoil'

import {
  ambiencesAtom,
  peopleAtom,
  placesAtom,
  wikiAtom,
} from './atoms/aspectDataAtoms';

const currentProfile = "dalymbia-PK";

const ProfileDataInitializer = (props) => {
  const [profileDataHasLoaded, setProfileDataHasLoaded] = useState(false)
  const [, setAmbiencesData] = useRecoilState(ambiencesAtom)
  const [, setPeopleData] = useRecoilState(peopleAtom)
  const [, setPlaces] = useRecoilState(placesAtom)
  const [, setWikiData] = useRecoilState(wikiAtom)
  
  useEffect(() => {
    const getProfileData = async () => {
      const ambiencesData = await import(`../data/profiles/${currentProfile}/ambiences`)
      const peopleData = await import(`../data/profiles/${currentProfile}/people`)
      const places = await import(`../data/profiles/${currentProfile}/places`)
      const wikiData = await import(`../data/profiles/${currentProfile}/wiki`)

      setAmbiencesData(ambiencesData);
      setPeopleData(peopleData.default);
      setPlaces(places.default);
      setWikiData(wikiData.default);

      setProfileDataHasLoaded(true);
    }
    
    getProfileData()
  }, [])

  return profileDataHasLoaded 
    ? <>{props.children}</>
    : null
}



export default ProfileDataInitializer