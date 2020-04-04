import React from 'react'
import styled from 'styled-components'

import MainWindow from './Containers/MainWindow'
import Sidebar from './Containers/Sidebar'

const This = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  align-content: flex-start;

  font-family: sans-serif;
  background-color: #333;
  color: #ddd;
`


function App() {
  return (
    <This className="App">
      <Sidebar />
      <MainWindow />
    </This>
  );
}

export default App
