import React ,{useState} from 'react'
import axios from 'axios'

const POST = () => {
    
       
        const[formdata,setformdata]=useState({
            name:"",
            age:"",
            city:"",
            person:""
        })

    let handlesubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/hotel", formdata)
    .then(() => {
      alert('Booked successfully!');
      setformdata({ name: "", age: "", city: "", person: "" }); // reset form
    })
    .catch((err) => {
      console.log(err);
      alert('Error while booking');
    });
};

    const changeinp=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        }
        )
    }

  return (
   <>
   <form onSubmit={handlesubmit}>
      
    Enter name:<input type="text" value={formdata.name} onChange={changeinp} name='name'/> <br /> <br />
    
     Enter age:<input type="text" value={formdata.age} onChange={changeinp}
     name='age'/> <br /> <br />
     
    Enter city:<input type="text" name='city' value={formdata.city} onChange={changeinp}/> <br /> <br />
    
     Enter person:<input type="text" name='person' value={formdata.person} onChange={changeinp}/> <br /> <br />
    <button type='submit'>Sign</button>
    </form>
   </>
  )
}

export default POST
