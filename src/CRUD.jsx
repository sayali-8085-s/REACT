import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CRUD = () => {
      const [ Data ,setdata] = useState([])
    //   for put
      const [ editid ,seteditid] = useState(null)
    //   for post 
     const[formdata,setformdata]=useState({
                name:"",
                age:"",
                city:"",
                person:""
            })

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
            // for page refresh
            setdata(Data.filter((e)=> e.id !== id))

        }).catch((err)=>{
            console.log(err);

        })

    }

// put

const openform = ((user)=>{

    seteditid(user)
    // form phle se fill rahe
    setformdata({ name:user.name, age:user.age, city:user.city, person:user.person });

});


  const changeinp=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        }
        )
    }

    const handleupadte = ((e)=>{
        e.preventDefault()
         axios.put(`http://localhost:3000/hotel/${editid.id}` ,{...formdata ,price:5000})
         })


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
        <th>edit</th>
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
            <td>{e.price * e.person}</td>
            <td onClick={()=>{del(e.id)}}>delete</td>
            <td onClick={()=>{openform(e)}}>edit</td>
        </tr>))}
           </tbody>
    </table>




    {editid && (<form onSubmit={handleupadte}>
      
    Enter name:<input type="text" value={formdata.name} onChange={changeinp} name='name'/> <br /> <br />
    
     Enter age:<input type="text" value={formdata.age} onChange={changeinp}
     name='age'/> <br /> <br />
     
    Enter city:<input type="text" name='city' value={formdata.city} onChange={changeinp}/> <br /> <br />
    
     Enter person:<input type="text" name='person' value={formdata.person} onChange={changeinp}/> <br /> <br />
    <button type='submit'>update</button>
    </form>)}
   </>
  )
}

export default CRUD


 