import React, { useState } from "react";
import nav_icon from "../../assets/images/db";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <div className="navbar">
        <div className="nav-logo"><Link to="/"><img src={nav_icon.logo_icon} alt="Company-logo" /></Link></div>
        <div className="menu">
          <div className="user"><Link to="/login-signup"><img src={nav_icon.user_icon} alt="" /></Link></div>
          {isActive ? <img src={nav_icon.menu_icon} onClick={() => { setIsActive(false) }} className="nav_list" /> : <div className="nav_items">
            <div className="list-item">
              <Link to="/"><p onClick={() => { setIsActive(true) }}>Home</p></Link>
              <Link to="/rooms"><p onClick={() => { setIsActive(true) }}>Rooms</p></Link>
              <Link to="/bookings"><p onClick={() => { setIsActive(true) }}>Booking</p></Link>
            </div>
            <img src={nav_icon.cross_icon} alt="" onClick={() => { setIsActive(true) }} className="cross"/>
          </ div>}
        </div>
      </div>
    </>
  )
}

export default Header;