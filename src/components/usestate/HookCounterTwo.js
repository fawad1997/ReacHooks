import React, {useState} from 'react'

function HookCounterTwo() {
    let initialState = 0;
    const [count, setCount] = useState(initialState)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=> prevCount+1)
        }
    }

    return (
        <div>
            <h1>Counter valus is: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>incrementFive()}>Increment Five</button>
        </div>
    )
}

export default HookCounterTwo
