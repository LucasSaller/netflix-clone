import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar-netflix.png";
import "./NavBar.css";
function NavBar() {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <img className="nav__avatar" src={avatar} alt="avatar" />
    </div>
  );
}

export default NavBar;
