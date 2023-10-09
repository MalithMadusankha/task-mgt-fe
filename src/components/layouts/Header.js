import React, { Component } from "react";
import "./Header.css";
import TaskLogo from "../../assert/images/taskLogo.png";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col">
            <img
              src={TaskLogo}
              style={{ width: 100, height: 50, borderRadius: 20, margin: 10 }}
              alt="logo"
            />
          </div>

          <h1 className="col"> GoviSaviya Agricultural Farm </h1>
        </div>
      </div>
    );
  }
}

export default Header;
