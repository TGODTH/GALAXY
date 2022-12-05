import { Outlet, Link } from "react-router-dom";
import logo from "../pic/logo.svg";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="box">
          <Link to="/" className="logo">
            <img className="logoPic" src={logo} alt="Galaxy logo" />
            <p className="logoText">GALAXY</p>
          </Link>
        </div>
        <div className="box">
          <Link to="/ecosystem" className="link">
            ECOSYSTEM
          </Link>
          <a href="#" className="link">
            LAUNCH APP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
