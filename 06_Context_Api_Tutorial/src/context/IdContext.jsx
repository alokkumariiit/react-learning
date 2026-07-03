import React, { createContext } from 'react'

export const Id = createContext();
function IdContext({children}) {
    let userId = "alok06"
  return (
    
      <Id.Provider value={{userId}}>
        {children}
      </Id.Provider>
   
  )
}

export default IdContext
