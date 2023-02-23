import Image from "next/image";
import React from "react";
import icon from "/public/react-icon-light.png";

const Navbar = (props) => {
  return (
    <div>
      <nav className={props.darkMode ? "dark" : ""}>
        <Image alt="..." className="nav--logo_icon" src={icon} />
        <h3 className="nav--logo_text">ReactFacts</h3>

        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
