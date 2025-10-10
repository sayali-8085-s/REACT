import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CRUD = () => {
      const [ Data ,setdata] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/hotel").then((res)=>{

            setdata(res.data);

        }).catch((err)=>{
            console.log(err);

        })
        
        
    },[])

let del = (id)=>{


   
       
        axios.delete(`http://localhost:3000/hotel/${id}`).then(()=>{

            alert('delete');
            setdata(Data.filter((e)=> e.id !== id))

        }).catch((err)=>{
            console.log(err);

        })
        
        
    }




  return (
   <>

   

    
    <table  id="hii" border={1} align="center">
        <thead>
         <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>city</th>
        <th>person</th>
        <th>price</th>
      
        <th>total</th>
        <th>delete</th>
      </tr></thead>
      <tbody>
       {Data.map((e ,index)=>(
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
            <td>{e.person}</td>
            <td>{e.price}</td>
            <td>{e.total}</td>
            <td onClick={()=>{del(e.id)}}>delete</td>
        </tr>))}
           </tbody>
    </table>
   </>
  )
}

export default CRUD


 