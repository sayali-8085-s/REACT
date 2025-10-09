import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./CRUD.jsx"
import mycontext from "./mycontext.jsx";


// let mydata ={
//     name :"say"
// }

let mytheme ={
    dark :{"background-color":'black' ,"color":"white"},
    light :{"background-color":'white'}
}

// let array = [ "palying" ," ","dancing"]

// let num = { "num1" :2 ,"num2":5}


// desr

// let alldata = {mydata ,mytheme,array}


createRoot(document.getElementById('root')).render(
  // <mycontext.Provider value={{mytheme ,array}}>
  <mycontext.Provider value={mytheme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </mycontext.Provider>
   
  
)
