import React from "react";
import Header from "./Header";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";
import { Outlet, Navigate } from "react-router-dom";

const AdminLayout = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <header>
        <Header />
        <NavbarAdmin />
        <br />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AdminLayout;
