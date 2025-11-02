import React from 'react'
import mycontext from './mycontext'
import { useContext } from 'react'
import { useState } from 'react'

const Contextchild = () => {

    // let mydata = useContext(mycontext)
    //  let {mytheme ,array} = useContext(mycontext)
     let num = useContext(mycontext)
      let mytheme = useContext(mycontext)

       const[mode ,setmode] = useState(false)
          
          
      
      //     mode ?mode=<h1>dark</h1>  :mode=<h1>light</h1>
  return (
    <>
    
    {/* <div>my name is {mydata.name}</div> */}
    {/* <div style = {mytheme.dark}>hhh</div>
    <h1>  my hobbies are  {array}</h1> */}
    {/* <h1>{num.num1 +num .num2}</h1> */}
    
    <div style = {mode?mytheme.dark:mytheme.light}> hii</div>
    <button onClick={()=> {setmode(!mode)}}>click</button> 

    



    </>
  )
}

export default Contextchild


