import React from 'react'
import {useRef} from 'react'

const UseRef = () => {

    let intref = useRef()

    let show = ()=>{
        console.log(intref.current.value)
    }
  return (
    <>
    <input type="text" ref ={intref} />
    <button onClick={show}>click</button>
    </>
  )
}

export default UseRef