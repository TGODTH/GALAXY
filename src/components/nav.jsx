import logo from "../pic/logo.svg";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="box">
          <a href="#" className="logo">
            <img className="logoPic" src={logo} alt="Galaxy logo" />
            <p className="logoText">GALAXY</p>
          </a>
        </div>
        <div className="box">
          <a href="#" className="link">
            ECOSYSTEM
          </a>
          <a href="#" className="link">
            LAUNCH APP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
