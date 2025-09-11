// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;

import img1  from "./assets/dog.webp"
import img2  from "./assets/react.svg"


import Welcome from "./child";

// Parent Component
function App() {
  return (
    <>
    <div style={{'display':'flex','justifyContent':'center' ,"alignItems":"center","gap":"20px" ,'height':'100vh'}}>
      <Welcome name ="Sayali" age ="20"  img = {img1}  />
      <Welcome name="Ram"  age ="21" img = {img2}/>
      <Welcome name="Priya"  age = "22" img = {img2}/>
      </div>
    </>
  );
}

export default App;
