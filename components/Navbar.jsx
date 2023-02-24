import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className={props.darkMode ? "dark" : ""}>
        <h3 className="nav--logo_text">Profile Card</h3>

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
