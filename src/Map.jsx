import React from 'react'

const App = () => {
    // const fruit =["mango",'apple']
    const fruit =[{id:1 ,name :"say"},{id:1 ,name :"khu"}]
  return (
    <>
     {/* <ul>
        {fruit.map((e ,index)=>
        (
           
            <li key ={index}> {e }</li>
          
             
        )
        )}
     </ul> */}
     
{/* AARAY OF OBJECT */}
     <ul>
        {fruit.map((e ,index)=>
        (
           
            <li key ={e.id}> my name {e.name }</li>
          
             
        )
        )}
     </ul>


    </>
   
    
  )
}

export default App