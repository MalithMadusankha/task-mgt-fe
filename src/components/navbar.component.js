import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand"></NavLink>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="navbar-item">
                <NavLink to="/Login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="navbar-item"></li>
              <li className="navbar-item">
                <NavLink to="/Register" className="nav-link">
                  Register
                </NavLink>
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
              <NavLink to="/Customer" className="nav-link">
                Customer
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/Employee/" className="nav-link">
                Employee
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/Task/" className="nav-link">
                Task
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/disDiary" className="nav-link">
                Events
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/AddDelivery" className="nav-link">
                Delivery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
