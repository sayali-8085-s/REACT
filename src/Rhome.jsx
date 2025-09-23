import { Link, Outlet } from "react-router-dom";
// layout
function Rhome() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
      {/* Nested component will render here */}
      <Outlet />
    </>
  );
}

export default Rhome;
