import React from 'react'
import "./Header.scss"
import Logo from "../../img/logo.jpg"

const Header = () => {
  return (
    <div className="n-container">
      <div className="n-left">
        <div className="n-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="n-toggle">Toggle</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Faculty</li>
            <li>Gallery</li>
            <li>Notice</li>
            <li>Mission</li>
          </ul>
        </div>
        <button className="button n-contact">Contact</button>
        {/* <button className="button n-login">Login</button> */}
      </div>
    </div>
  );
}

export default Header
