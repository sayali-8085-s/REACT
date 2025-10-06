import React from 'react'
import mycontext from './mycontext'
import { useContext } from 'react'

const Contextchild = () => {

    let mydata = useContext(mycontext)

  return (
    <>
    
    <div>my name is {mydata.name}</div>
    </>
  )
}

export default Contextchild