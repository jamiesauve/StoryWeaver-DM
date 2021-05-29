import React, { useState, useEffect } from 'react'

import { useRecoilState } from 'recoil'

// import { profilesAtom } from './atoms/staticDataAtoms';

import {
  peopleAtom,
  wikiAtom,
} from './atoms/aspectDataAtoms';

const currentProfile = "dalymbia-DK";

const ProfileDataInitializer = (props) => {
  const [profileDataHasLoaded, setProfileDataHasLoaded] = useState(false)
  const [, setPeopleData] = useRecoilState(peopleAtom)
  const [, setWikiData] = useRecoilState(wikiAtom)
  
  useEffect(() => {
    const getProfileData = async () => {
      const peopleData = await import(`../data/profiles/${currentProfile}/people`)
      const wikiData = await import(`../data/profiles/${currentProfile}/wiki`)

      setPeopleData(peopleData);
      setWikiData(wikiData);

      setProfileDataHasLoaded(true);
    }
    
    getProfileData()
  }, [])

  return profileDataHasLoaded 
    ? <>{props.children}</>
    : null
}



export default ProfileDataInitializer