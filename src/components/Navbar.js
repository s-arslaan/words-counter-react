import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const [active, setActive] = useState("home")
  const activeToggle = (page) => {
    if (page==='about') {
      setActive('about');
      document.title = 'Word Counter | About';
    } else {
      setActive('home');
      document.title = 'Word Counter | Characters Counter';
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" onClick={()=>activeToggle('home')} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${active === 'about' ? '':'active'}`} onClick={()=>activeToggle('home')} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${active === 'about' ? 'active':''}`} onClick={()=>activeToggle('about')} to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label text-${props.mode==='dark'? 'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// set props data types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// set default props value (incase value is not passed)
Navbar.defaultProps = {
  title: "Set title",
  aboutText: "Set About Text",
};
