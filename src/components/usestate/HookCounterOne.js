import React, { useState } from "react"

function HookCounterOne() {
    const [count, setCount] = useState(1)
    return (
        <div>
            <h1>Counter value is : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default HookCounterOne
