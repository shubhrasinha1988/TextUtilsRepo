import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about">{props.aboutText}</Link>
        </li>
        </ul>
       
  <div className={`form-check form-switch text-${props.mode==='light'?'black':'white'}` }>
  <input className="form-check-input" type="checkbox" role="switch"onClick={props.toggleTheme} id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

<button type="button" className="btn btn-primary my-2 mx-2" onClick={props.greenMode}>Green Mode</button>
<button type="button" className="btn btn-primary my-2 mx-2" onClick={props.yellowMode}>Yellow Mode</button>




      
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
  };
  Navbar.defaultProps = {
    title: 'myPage',
    aboutText:'About Text Here'
  };