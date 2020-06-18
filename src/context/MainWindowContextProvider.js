import React, { createContext } from 'react'

export const ActiveLocationContext = createContext(null)
export const MainWindowBodyHeightContext = createContext(null)

const MainWindowContextProvider = (props) => {
  return (
    <ActiveLocationContext.Provider value={props.activeLocation}>
      <MainWindowBodyHeightContext.Provider value={props.windowHeight}>
        {props.children}
      </MainWindowBodyHeightContext.Provider>
    </ActiveLocationContext.Provider>
  )
}

export default MainWindowContextProvider