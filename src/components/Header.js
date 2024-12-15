import React from "react";

const Header = ({ loadSection }) => (
  <header>
    <h1>CareerConnect</h1>
    <nav>
      <ul>
        <li><button onClick={() => loadSection("login")}>Login</button></li>
        <li><button onClick={() => loadSection("register")}>Register</button></li>
        <li><button onClick={() => loadSection("jobs")}>Job Listings</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;
