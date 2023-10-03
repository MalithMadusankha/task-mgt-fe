import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Navigate } from "react-router-dom";
import NavbarEmployee from "./NavbarEmployee";

const EmployeeLayout = ({ isAuthenticated, isValidUser }) => {
  if (isAuthenticated && isValidUser) {
    return (
      <div>
        <header>
          <Header />
          <NavbarEmployee />
          <br />
        </header>
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default EmployeeLayout;
