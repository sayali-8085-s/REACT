import React from 'react'
import { useState } from 'react'

const APP = () => {

    let age =18
    let anss 
    age>=18 ?anss=<h1>vote</h1>  :anss=<h1>not</h1>


    const[login ,setlogin] = useState(false)
    let ans 
    // if(login){
    //     ans = <h1>welcom</h1>
    // }
    // else{
    //     ans=<h1>please login</h1>
    // }

    login ?ans=<h1>wel</h1>  :ans=<h1>login</h1>


    const[mode ,setmode] = useState(false)
    let modes 
    // if(login){
    //     ans = <h1>welcom</h1>
    // }
    // else{
    //     ans=<h1>please login</h1>
    // }

    mode ?modes=<h1>dark</h1>  :modes=<h1>light</h1>

const[dark ,setdarkmode] = useState(false)
const[msg ,setmsg] = useState(false)
  return (
    <>
     {ans}
     {modes}
     <button onClick={()=> {setlogin(!login)}}>{login ?ans=<h1>logout</h1>  :ans=<h1>login</h1>}</button>

     <button onClick={()=> {setmode(!mode)}}>{mode ? "lightmode active" :"darkmode active"}</button>

     <div style={{height:"100px" ,backgroundColor:dark ? "white" :"black",color:dark ? "black" :"white" }}> hii</div>
     <button onClick={()=> {setdarkmode(!dark)}}>click me</button> <br />

     {msg && "show msg"}
      <button onClick={()=> {setmsg(!msg)}}>show msg</button>

    <h1>render</h1>
    </>
  )
}

export default APP