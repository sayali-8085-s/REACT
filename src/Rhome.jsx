import { Link } from "react-router-dom"

function Rhome() {
  return (
    <><nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

    </>
  )
}

export default Rhome