import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    users: [
        {
            id: 1,
            name: "User 1"
        },
        {
            id: 2,
            name: "User 2"
        },
        {
            id: 3,
            name: "User 3"
        }
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Componenet
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions
    const deleteUser = (id) => {
        
        dispatch({ type: 'DELETE', payload: id })
    }


    return (
        <GlobalContext.Provider value={{ 
            users: state.users,
            deleteUser
         }}>
            {children}
        </GlobalContext.Provider>
    )
}