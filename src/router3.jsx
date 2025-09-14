import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rhome from "./Rhome";



function Home() {
  return (
    <>
    <h1>home</h1>
    
    </>
  );
}

function About() {
  return ( <>
  <home/>
  <h2>About Us Page</h2></>)
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <Rhome/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
