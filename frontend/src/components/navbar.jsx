import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <img src="gymlogo.jpg" alt="Gym Logo" />
        <span>R.RB Fitness Gym</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <div className="login-dropdown">
          <button className="login-btn">Login ▾</button>

          <div className="dropdown-menu">
            <Link to="/admin/login">Admin Login</Link>
            <Link to="/client/login">Client Login</Link>
          </div>
        </div>

        <Link to="/plans">Plans</Link>
      </div>

    </nav>
  );
}

export default Navbar;