import React from 'react'
import _ from 'lodash'

import ThemeBox from './Components/ThemeBox'
import tracks from './assets/tracks'

import './App.css';


function App() {
  const copyTrack = (location) => {
    const url = location.startsWith(`url:`)
    ? location.substring(4)
    : `https://michaelghelfi.bandcamp.com/track/${location}`
    
    const command = `;;play ${url}`

    navigator.clipboard.writeText(command)
  }

  return (
    <div className="App">
      {_.map(tracks, (category, categoryName) => (
        <ThemeBox
          copyTrack={copyTrack}
          key={categoryName}
          label={categoryName}
          labelColor={category.labelColor}
          tracks={category.trackObjects}
        />
      ))}
    </div>
  );
}

export default App
