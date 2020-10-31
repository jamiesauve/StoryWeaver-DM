import axios from 'axios'

const baseUrl = 'http://127.0.0.1:4208' // TODO: stick this in a .env file

const encodeTrackUrl = (url) => {
  return url
  .replace(/\//g, '!@')
  .replace(/\?/g, '^^')
}

export const startTrack = (trackTitle, basicTrackLocation, isMyOwnSong = false) => {
  const rawLocation = isMyOwnSong 
  ? basicTrackLocation
  : encodeTrackUrl(basicTrackLocation)

  const result = axios.post(`${baseUrl}/api`, {
    data: {
      command: 'play',
      isMyOwnSong,
      trackTitle,
      rawLocation,
    },
    headers: {
      'content-type': 'application/json',
    }
  })
  
  return result;
}

export const stopTrack = () => {
  const result = axios.post(`${baseUrl}/api`, {
    data: {
      command: 'stop',
    },
    headers: {
      'content-type': 'application/json',
    }
  })

  return result;
}