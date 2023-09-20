import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom

import NavbarPublic from "./components/layouts/NavbarPublic";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import EditCustomer from "./components/edit-Customer.component";
import CreateCustomer from "./components/create-Customer.component";
import CreateEmployee from "./components/create-Employee.component";
import TaskList from "./components/Task-list.component";
import EditEmployee from "./components/edit-Employee.components";
import CustomerList from "./components/Customer-list.component";
import Home from "./components/pages/Home";
import EmployeeList from "./components/Employee-list.component";
import CreateTask from "./components/create-Task.component";
import Edittask from "./components/edit-Task.component";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import ReportCus from "./components/Report-Customer.component";
import EmpReport from "./components/Employee-Report.component";
import ReportTask from "./components/Task-Report.component";

import DisDiary from "./components/disDiary";
import Login from "./components/Login";
import Register from "./components/Register";
import AddDelivery from "./components/AddDelivery";
import NavbarAdmin from "./components/layouts/NavbarAdmin";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavbarAdmin />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Customer" element={<CustomerList />} />
          <Route path="/ReportCus" element={<ReportCus />} />
          <Route path="/edit/:id" element={<EditCustomer />} />
          <Route path="/create" element={<CreateCustomer />} />
          <Route path="/Employee/add" element={<CreateEmployee />} />
          <Route path="/EmpReport" element={<EmpReport />} />
          <Route path="/Task" element={<TaskList />} />
          <Route path="/Task/add" element={<CreateTask />} />
          <Route path="/Employee" element={<EmployeeList />} />
          <Route path="/Taskcre" element={<createTask />} />
          <Route path="/ReportTask" element={<ReportTask />} />
          <Route path="/Taskedit/Edit/:id" element={<Edittask />} />
          <Route path="/EMP/Edit/:id" element={<EditEmployee />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/disDiary" element={<DisDiary />} />
          <Route path="/AddDelivery" element={<AddDelivery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
