// function Welcome(props) {
//   return(
// <>
//   <h1  style={{ "height":"250px" ,"width":"250px","border":'1px solid black'}}> <img src={props.img} alt=""  height="100px"/> <br />Hello {props.name}<br></br> age:{props.age}  <br />  </h1>;
  
//   </>

//   )
// }

// export default Welcome


//  import "./child.css"
// function Welcome(props) {
//   return(
// <>
// <div class='box'>
// <img src={props.img} alt=""  height='100px'/>
//   <h1>{props.name}</h1>
//   <h1>{props.age}</h1>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum repudiandae laboriosam, doloribus dolorem necessitatibus! Harum repellat ducimus dicta tempore?</p>
//   <button>  More</button>
//   </div>
//   </>

//   )
// }

// export default Welcome

// ANOTHER WAY
 import "./child.css"
function Welcome({img,name,age}) {
  return(
<>
<div class='box'>
<img src={img} alt=""  height='100px'/>
  <h1>{name}</h1>
  <h1>{age}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum repudiandae laboriosam, doloribus dolorem necessitatibus! Harum repellat ducimus dicta tempore?</p>
  <button>  More</button>
  </div>
  </>

  )
}

export default Welcome