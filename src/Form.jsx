
import React, { useState } from 'react';


const App = () => {
  const [chang, setname] = useState(""); // initial value = 0



    let change =(e)=>{
        // console.log(e.target.value)
        setname(e.target.value)

    }


    
    
      // function to increase count
     
  return (
    <>
    <h1>form</h1>
     <input type="text"  onChange={change}/>
     <h1>{chang}</h1>
    {/* <h1>{e.target.value}</h1> */}
    </>
  )
}

export default App