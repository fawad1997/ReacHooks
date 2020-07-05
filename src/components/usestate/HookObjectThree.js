import React, { useState } from 'react'

function HookObjectThree() {
    const [name, setname] = useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
            <input type="text" value={name.firstName} onChange={(e)=>setname({...name,firstName:e.target.value})} />
            <br/>
            <input type="text" value={name.lastName} onChange={(e)=>setname({...name,lastName:e.target.value})} />
            </form>
            <h4>First name: {name.firstName}, Last Name:{name.lastName}</h4>
        </div>
    )
}

export default HookObjectThree
