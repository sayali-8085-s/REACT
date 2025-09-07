// import React from "react";
// import img  from "./assets/dog.webp"

// import { FaHome } from "react-icons/fa";

// function Header(){
    
//     return(
//         <>
//         <FaHome />
//         <h1 style={{'color':'red'}}>header</h1>
//         <img src={img} alt="dog" />
//         </>
//     )
// }
// export default Header  


import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
 import "./app.css"
import tig  from "./assets/reel10.jpg"


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




function Home() {
  return (
    <div className="container-fluid p-0">
      <img
        src={tig} // 👈 apna image path do
        alt="home banner"
        className="img-fluid w-100"
      />
    </div>
  );
}

export {Header,Home}