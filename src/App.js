import React from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import RecoilStateWatcher from './utils/RecoilStateWatcher'
import ProfileDataInitializer from './state/ProfileDataInitializer'
import StaticDataInitializer from './state/StaticDataInitializer'

import MainWindow from './Containers/MainWindow'

const This = styled.div``


function App() {
  return (
    <This
      className="App"
    >
      <RecoilRoot>
        <RecoilStateWatcher  
          isLogging={true}
          onlyLogTheseAtoms={["rolls"]}
        />
        <StaticDataInitializer>
          <ProfileDataInitializer>
            <MainWindow />
          </ProfileDataInitializer>
        </StaticDataInitializer>
      </RecoilRoot>
    </This>
  );
}

export default App
