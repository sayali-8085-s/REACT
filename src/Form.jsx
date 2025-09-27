
import React, { useState } from 'react';


const App = () => {
  const [name, setname] = useState(""); // initial value = 0
  const [email, setemail] = useState("");

// inline nhi krna hai toh

    // let change =(e)=>{
    //     // console.log(e.target.value)
    //     setname(e.target.value)

    // }


    let handlesubmit =(e)=>{
     
      e.preventDefault ()   //pervent reload form
     
    
  }
      
   


     
  return (
    <>
    <h1>form</h1>
     {/* <input type="text"  onChange={change}/> */}
     <form onSubmit={handlesubmit}>
       <h1>{name}</h1>
    name  <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />
    <h1>{email}</h1>
     
    email <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
     
     
    


    <button type='submit'> submit</button>
    </form>
    </>
  )
}

export default App


// uncontolled component - react dosent know  ,contolled by value
