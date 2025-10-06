// import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./contextmain.jsx"
import mycontext from "./mycontext.jsx";


let mydata ={
    name :"say"
}

createRoot(document.getElementById('root')).render(
  <mycontext.Provider value={mydata}>
      <App />
  </mycontext.Provider>
   
  
)
