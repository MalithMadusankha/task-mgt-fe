import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../Button/LogoutButton";

export default class NavbarEmployee extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand"></NavLink>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="navbar-item pt-1">
                <LogoutButton />
              </li>
            </ul>

            <li className="navbar-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/Task/" className="nav-link">
                Task
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
