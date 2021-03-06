
# Context API
Create file **GlobalState**, Create Initial state and use context
```javascript
// Initial State
const initialState = {
    users:[
        {
            id: 1,
            name:"User 1"
        },
        {
            id: 2,
            name:"User 2"
        },
        {
            id: 3,
            name:"User 3"
        }
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);
```

Now create a **Provider** that will be wrapped on components in the same file

```javascript
//Provider Componenet
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{users:state.users}}>
            {children}
        </GlobalContext.Provider>
    )
}
```

Now Create file **AppReducer**

In AppReducer, write code
```javascript

export default (state, action) => {
    switch (action.type) {

    default:
        return state
    }
}
```
Not wrap App.js with **GlobalProvider**


Now on any component, you can simple access it by

```    const {users} = useContext(GlobalContext)```