import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    users: [

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

    const addUser = (user) =>{
        dispatch({
            type:'ADD',
            payload:user
        })
    }

    const editUser = (user) =>{
        dispatch({
            type:'EDIT',
            payload:user
        })
    }


    return (
        <GlobalContext.Provider value={{ 
            users: state.users,
            deleteUser,
            addUser,
            editUser
         }}>
            {children}
        </GlobalContext.Provider>
    )
}