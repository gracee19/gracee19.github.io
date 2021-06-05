import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        Grace Palenzuela
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleburger"
        aria-controls="navbarToggleburger"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggleburger">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="/portfolio"> */}
            {/* <a href="/portfolio" onClick={Link} to="/portfolio"> */}
            <a><Link to="/portfolio">
               Portfolio
            </Link></a>
            {/* </a> */}
          </li>
          <li class="nav-item">
            <a class="nav-link" href="assets/Grace's CV.pdf">
              Resume
            </a>
          </li>
          <li class="nav-item">
            {/* <a class="nav-link" href="/contact"> */}
            {/* <a href="/contact" onClick={Link} to="/contact"> */}
            <a><Link to="/contact">Contact</Link></a>
              Contact
            {/* </a> */}
            
            {/* </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
