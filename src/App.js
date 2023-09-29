// App.js
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
import EventList from "./components/Event-list.component";
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
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminLayout from "./components/layouts/AdminLayout";
import PublicLayout from "./components/layouts/PublicLayout";
import CreateEvent from "./components/create-Event.component";
import EditEvent from "./components/edit-Event.component";

function App() {
  let isAuthenticated = false;
  let token = localStorage.getItem("token");
  if (token) {
    isAuthenticated = true;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={<AdminLayout isAuthenticated={isAuthenticated} />}
        >
          <Route path="/admin/Customer" element={<CustomerList />} />
          <Route path="/admin/ReportCus" element={<ReportCus />} />
          <Route path="/admin/edit/:id" element={<EditCustomer />} />
          <Route path="/admin/create" element={<CreateCustomer />} />

          <Route path="/admin/Event" element={<EventList />} />
          <Route path="/admin/ReportEvent" element={<ReportCus />} />
          <Route path="/admin/event/edit/:id" element={<EditEvent />} />
          <Route path="/admin/event/create" element={<CreateEvent />} />

          <Route path="/admin/Employee/add" element={<CreateEmployee />} />
          <Route path="/admin/EmpReport" element={<EmpReport />} />
          <Route path="/admin/Task" element={<TaskList />} />
          <Route path="/admin/Task/add" element={<CreateTask />} />
          <Route path="/admin/Employee" element={<EmployeeList />} />
          <Route path="/admin/Taskcre" element={<createTask />} />
          <Route path="/admin/ReportTask" element={<ReportTask />} />
          <Route path="/admin/Taskedit/Edit/:id" element={<Edittask />} />
          <Route path="/admin/EMP/Edit/:id" element={<EditEmployee />} />

          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/contact" element={<Contact />} />
          <Route path="/admin/Login" element={<Login />} />
          <Route path="/admin/Register" element={<Register />} />
          <Route path="/admin/disDiary" element={<DisDiary />} />
          <Route path="/admin/AddDelivery" element={<AddDelivery />} />
          <Route path="/admin" element={<Home />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/disDiary" element={<DisDiary />} />
          <Route path="/AddDelivery" element={<AddDelivery />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
