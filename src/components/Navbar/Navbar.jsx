import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/chandan-logo-transparent.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="" />
          <ul>
            <li>
              <a className="menu-item">Home</a>{" "}
            </li>
            <li>
              <a className="menu-item">Skills</a>{" "}
            </li>
            <li>
              <a className="menu-item">Work Experience</a>{" "}
            </li>
            <li>
              <a className="menu-item">Contact Me</a>{" "}
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <IoClose /> : <HiMenuAlt3 />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
