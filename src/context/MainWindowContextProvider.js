import React, { createContext, useState } from 'react'


export const ActiveLocationContext = createContext(null)
export const ActiveLocationTypeContext = createContext(null)
export const MainWindowBodyHeightContext = createContext(null)
export const LinkContext =  createContext(null)

const MainWindowContextProvider = (props) => {
  const [currentLinkData, setCurrentLinkData] = useState(null)
  
  return (
    <ActiveLocationContext.Provider value={props.activeLocation}>
      <ActiveLocationTypeContext.Provider value={props.activeLocationType}>
        <MainWindowBodyHeightContext.Provider value={props.windowHeight}>
          <LinkContext.Provider value={{link: currentLinkData, setLink: setCurrentLinkData}}>
            {props.children}
          </LinkContext.Provider>
        </MainWindowBodyHeightContext.Provider>
      </ActiveLocationTypeContext.Provider>
    </ActiveLocationContext.Provider>
  )
}

export default MainWindowContextProvider