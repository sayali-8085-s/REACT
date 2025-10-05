import React from 'react'
import { useState } from 'react'

const APP = () => {
const[dark ,setdarkmode] = useState(false)

  return (
    <>
     
     <div style={{height:"100px" ,width:"100px" ,backgroundColor:dark ? "red" :"green" }}> </div>

     <br /> <br />
     <button onClick={()=> {setdarkmode(!dark)}}>{dark ? "green" :"red"}</button> <br />

     
    </>
  )
}

export default APP