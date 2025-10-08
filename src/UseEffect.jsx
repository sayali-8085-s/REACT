import React ,{useEffect ,useState} from 'react'


const UseEffect = () => {

    let [count ,setcount] = useState(0)

    useEffect( ()=>{
        console.log("run")
    } ,[])
    // [] dependency array it stop to run other states bt if uhh want pass that state variable name in dependency
  return (
   <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={ ()=> {setcount(count+1)}}>click</button>
   </>
  )
}

export default UseEffect