import React from 'react'
import styled from 'styled-components'

import MainWindow from './Containers/MainWindow'

import colors from './data/styles/colors'
import sizes from './data/styles/sizes'

const This = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  align-content: flex-start;
  
  background-color: ${colors.mediumBackground};

  font-family: sans-serif;
  font-size: ${sizes.medium};
  color: ${colors.lightGrey};
`


function App() {
  

  return (
    <This
      className="App"
    >
      <MainWindow />
    </This>
  );
}

export default App
