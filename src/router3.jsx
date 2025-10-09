import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rhome from "./Rhome";

function Home() {
  return (
    <>
      <h1>Home hh</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About Us Page</h2>
    </>
  );
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Rhome />}>
          {/* Nested routes will render inside <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* to show eeroe while give wrong path */}
          <Route path="*" element={<h1> error </h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
