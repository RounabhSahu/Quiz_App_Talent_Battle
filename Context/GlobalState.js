import React, {useState, useEffect} from "react"

const StateContext = React.createContext();

const GlobalState = ({children})=>{
    const text = 'hello';
    return(
        <StateContext.Provider value={{text}}>
            {children}
        </StateContext.Provider>
    )
}
export {StateContext,GlobalState};