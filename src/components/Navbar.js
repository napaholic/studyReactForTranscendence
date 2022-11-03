import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbartop">
      <a class="navbar-brand" href="http://localhost:3000">
        홈
      </a>
      <span class="collapse navbar-collapse" id="navbarNav">
        <span class="navbar-nav">
          <span class="nav-item active">
            <a class="nav-link1" href="http://localhost:3000/modal">
              게임
            </a>
          </span>
          <span class="nav-item">
            <a class="nav-link2" href="http://localhost:3000/login">
              Login
            </a>
          </span>
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
