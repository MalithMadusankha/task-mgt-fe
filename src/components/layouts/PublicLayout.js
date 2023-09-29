import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavbarPublic from "./NavbarPublic";

const PublicLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <NavbarPublic />
        <br />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PublicLayout;
