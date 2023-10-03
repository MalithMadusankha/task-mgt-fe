import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Navigate } from "react-router-dom";
import NavbarCustomer from "./NavbarCustomer";

const CustomerLayout = ({ isAuthenticated, isValidUser }) => {
  if (isAuthenticated && isValidUser) {
    return (
      <div>
        <header>
          <Header />
          <NavbarCustomer />
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

export default CustomerLayout;
