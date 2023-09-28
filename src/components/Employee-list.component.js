import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Employee = (props) => (
  <tr>
    <td> {props.Employee.userId} </td>
    <td> {props.Employee.username} </td>
    <td> {props.Employee.address} </td>
    <td> {props.Employee.phone} </td>
    <td> {props.Employee.birthday.substring(0, 10)} </td>
    <td> {props.Employee.email} </td>
    <td> {props.Employee.position} </td>
    <td> {props.Employee.gender} </td>
    <td>
      <Link
        className="btn btn-warning btn-sm mx-1"
        to={"Employee/edit/" + props.Employee._id}
      >
        Edit
      </Link>
      |
      <button
        className="btn btn-danser btn-sm mx-1"
        onClick={() => {
          props.deleteEmployee(props.Employee._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Employee: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/user/type/EMPLOYEE")
      .then((response) => {
        console.log("emp :", response.data);
        this.setState({ Employee: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEmployee(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/user/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Employee: this.state.Employee.filter((el) => el._id !== id),
      });
    }
  }

  EmployeeList() {
    return this.state?.Employee?.map((currentEmployee) => {
      return (
        <Employee
          Employee={currentEmployee}
          deleteEmployee={this.deleteEmployee}
          key={currentEmployee._id}
        />
      );
    });
  }

  filterData(Employee, searchKey) {
    this.setState({
      Employee: this.state.Employee.filter((el) => (el.Username = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/user/type/EMPLOYEE").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.username.includes(searchKey)
      );

      this.setState({ Employee: result });
    });
  };

  render() {
    return (
      <div className="m-3">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4> Employee List </h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th> Employee ID </th> <th> Employee Name </th> <th> Address </th>
              <th> Phone </th> <th> Birthday </th> <th> Position </th>
              <th> Gender </th> <th> Actions </th>
            </tr>
          </thead>
          {this.state.Employee && this.state?.Employee.length > 0 ? (
            <tbody>
              {this.state?.Employee?.map((emp) => (
                <tr key={emp?._id}>
                  <td> {emp?.userId} </td>
                  <td> {emp?.username} </td>
                  <td> {emp?.address} </td>
                  <td> {emp?.phone} </td>
                  <td> {emp?.birthday.substring(0, 10)} </td>
                  <td> {emp?.email} </td>
                  <td> {emp?.position} </td>
                  <td> {emp?.gender} </td>
                  <td>
                    <Link
                      className="btn btn-warning btn-sm mx-1"
                      to={"/EMP/Edit/" + emp._id}
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => {
                        this.deleteEmployee(emp._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}

          <br></br>
          <Link className="mx-3" to="/Employee/add/">
            <Button variant="primary">New Employee</Button>
          </Link>

          <Link to="/EmpReport">
            <Button variant="primary">Generate Report</Button>
          </Link>
          <br></br>
        </table>
      </div>
    );
  }
}
