// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom

import EditCustomer from "./pages/customer/edit-Customer.component";
import CreateCustomer from "./pages/customer/create-Customer.component";
import CreateEmployee from "./pages/employee/create-Employee.component";
import TaskList from "./pages/task/Task-list.component";
import EditEmployee from "./pages/employee/edit-Employee.components";
import CustomerList from "./pages/customer/Customer-list.component";
import EventList from "./pages/event/Event-list.component";
import Home from "./pages/Home";
import EmployeeList from "./pages/employee/Employee-list.component";
import CreateTask from "./pages/task/create-Task.component";
import Edittask from "./pages/task/edit-Task.component";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ReportCus from "./pages/customer/Report-Customer.component";
import EmpReport from "./pages/employee/Employee-Report.component";
import ReportTask from "./pages/task/Task-Report.component";

import DisDiary from "./components/disDiary";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import AddDelivery from "./components/AddDelivery";
import AdminLayout from "./components/layouts/AdminLayout";
import PublicLayout from "./components/layouts/PublicLayout";
import CreateEvent from "./pages/event/create-Event.component";
import EditEvent from "./pages/event/edit-Event.component";
import CustomerLayout from "./components/layouts/CustomerLayout";
import EmployeeLayout from "./components/layouts/EmployeeLayout";

function App() {
  let isAuthenticated = false;
  let uType = localStorage.getItem("userType");
  let token = localStorage.getItem("token");
  let isEmployee,
    isAdmin,
    isCustomer = false;

  if (uType === "EMPLOYEE") {
    isEmployee = true;
  } else if (uType === "CUSTOMER") {
    isCustomer = true;
  } else if (uType === "ADMIN") {
    isAdmin = true;
  }

  if (token) {
    isAuthenticated = true;
  }

  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout
              isAuthenticated={isAuthenticated}
              isValidUser={isAdmin}
            />
          }
        >
          <Route path="/admin/Customer" element={<CustomerList />} />
          <Route path="/admin/ReportCus" element={<ReportCus />} />
          <Route path="/admin/edit/:id" element={<EditCustomer />} />
          <Route path="/admin/create" element={<CreateCustomer />} />

          <Route path="/admin/Event" element={<EventList />} />
          <Route path="/admin/ReportEvent" element={<ReportCus />} />
          <Route path="/admin/event/edit/:id" element={<EditEvent />} />
          <Route path="/admin/event/create" element={<CreateEvent />} />

          <Route path="/admin/Employee" element={<EmployeeList />} />
          <Route path="/admin/Employee/add" element={<CreateEmployee />} />
          <Route path="/admin/EmpReport" element={<EmpReport />} />
          <Route path="/admin/EMP/Edit/:id" element={<EditEmployee />} />

          <Route path="/admin/Task" element={<TaskList />} />
          <Route path="/admin/Task/add" element={<CreateTask />} />
          <Route path="/admin/ReportTask" element={<ReportTask />} />
          <Route path="/admin/Task/edit/:id" element={<Edittask />} />

          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/contact" element={<Contact />} />
          <Route path="/admin/Login" element={<Login />} />
          <Route path="/admin/Register" element={<Register />} />
          <Route path="/admin/disDiary" element={<DisDiary />} />
          <Route path="/admin/AddDelivery" element={<AddDelivery />} />
          <Route path="/admin" element={<Home />} />
        </Route>

        {/* Customer Routes */}
        <Route
          element={
            <CustomerLayout
              isAuthenticated={isAuthenticated}
              isValidUser={isCustomer}
            />
          }
        >
          <Route path="/customer/Event" element={<EventList />} />
          <Route path="/customer/ReportEvent" element={<ReportCus />} />
          <Route path="/customer/event/edit/:id" element={<EditEvent />} />
          <Route path="/customer/event/create" element={<CreateEvent />} />

          <Route path="/customer/about" element={<About />} />
          <Route path="/customer/contact" element={<Contact />} />
          <Route path="/customer/Login" element={<Login />} />
          <Route path="/customer/Register" element={<Register />} />
          <Route path="/customer/disDiary" element={<DisDiary />} />
          <Route path="/customer/AddDelivery" element={<AddDelivery />} />
          <Route path="/customer/" element={<Home />} />
        </Route>

        {/* Employee Routes */}
        <Route
          element={
            <EmployeeLayout
              isAuthenticated={isAuthenticated}
              isValidUser={isEmployee}
            />
          }
        >
          <Route path="/employee/Task" element={<TaskList />} />
          <Route path="/employee/Task/edit/:id" element={<Edittask />} />
          <Route path="/employee/ReportTask" element={<ReportTask />} />
          <Route path="/employee/about" element={<About />} />
          <Route path="/employee/contact" element={<Contact />} />
          <Route path="/employee/Login" element={<Login />} />
          <Route path="/employee/Register" element={<Register />} />
          <Route path="/employee/disDiary" element={<DisDiary />} />
          <Route path="/employee/AddDelivery" element={<AddDelivery />} />
          <Route path="/employee/" element={<Home />} />
        </Route>

        {/* Public Routes */}
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
