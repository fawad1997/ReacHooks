import React, {useState,useEffect} from 'react'

function EffectOnceTwo() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('UseEffect Called')
        //Return function is only for component will unmount
        return ()=>{

        }
    }, [])

    return (
        <div>
            Gooks X - {x} Y - {y}
        </div>
    )
}

export default EffectOnceTwo
