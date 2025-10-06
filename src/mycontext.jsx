// props drilling -app-mid-child -     app-child ,  fristly provide in main.jsx
// to overcome this
// hook-context api ,usecontext


import React from 'react'
import { createContext } from 'react'


  
   let mycontext = createContext()

export default mycontext