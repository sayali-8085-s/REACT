// import React from 'react'
// // import { TbLetterC } from 'react-icons/tb'
import React, { useState } from 'react';

const App = () => {


  let sayhii =(name)=>{
    alert('hii say'+name)

  }


 const [count, setCount] = useState(5); // initial value = 0

  // function to increase count
  const decc = () => {
    if(count<=0){
      return

    
  };
    setCount(count -1 );
  }

  const [coun, setCoun] = useState(0); // initial value = 0

  // function to increase count
  const inc = () => {
    setCoun(coun + 1);
  };




   const [myname, setname] = useState("sayali"); // initial value = 0

  // function to increase count
  const change = () => {
    setname("khushi");
  };



  return (
    <>
    <div>state</div>
    <button onClick={(say)=>alert('hello')}>click</button>
    <button onClick={sayhii}>click</button>
     <button onClick={()=>sayhii('sayali')}>click</button>
     
      <button onClick={inc}>increment</button>
      <button onClick={decc}>decrement</button>
      <h1>{count}</h1>
      <h1>{coun}</h1>


      <h1>{myname}</h1>
      <button onClick={change}> change</button>

    </>
  )
}

export default App

