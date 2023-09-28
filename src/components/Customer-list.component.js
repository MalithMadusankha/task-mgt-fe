import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Customer = (props) => (
  <tr>
    <td> {props.Customer.userId} </td> <td> {props.Customer.username} </td>
    <td> {props.Customer.address} </td> <td> {props.Customer.phone} </td>
    <td> {props.Customer.birthday.substring(0, 10)} </td>
    <td> {props.Customer.email} </td>
    <td>
      <Link
        className="btn btn-warning btn-sm mx-1"
        to={"/edit/" + props.Customer._id}
      >
        Edit
      </Link>
      |
      <button
        className="btn btn-danger btn-sm mx-1"
        onClick={() => {
          props.deleteCustomer(props.exercise._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Customer: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/user/type/CUSTOMER")
      .then((response) => {
        this.setState({ Customer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCustomer(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/user/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Customer: this.state.Customer.filter((el) => el._id !== id),
      });
      //}
    }
  }

  CustomerList() {
    return this.state.Customer.map((currentCustomer) => {
      return (
        <Customer
          Customer={currentCustomer}
          deleteCustomer={this.deleteCustomer}
          key={currentCustomer._id}
        />
      );
    });
  }

  filterData(Customer, searchKey) {
    this.setState({
      Customer: this.state.Customer.filter((el) => (el.Username = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/user/type/CUSTOMER").then((response) => {
      const resultt = response.data;
      const result = resultt.filter(
        (props) =>
          props.username.includes(searchKey) ||
          props.userId.includes(searchKey) ||
          props.address.includes(searchKey) ||
          props.email.includes(searchKey)
      );

      this.setState({ Customer: result });
    });
  };

  render() {
    return (
      <div className="m-3">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <b>
              <h4> Customer List </h4>
            </b>
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
              <th className="m-0 p-0"> Customer ID </th>
              <th> Customer Name </th>
              <th> Address </th>
              <th> Phone </th>
              <th> Birth Day </th>
              <th> Email </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {this.state.Customer.map((props) => (
              <tr key={props.id}>
                <td className="m-0 p-0"> {props.userId} </td>
                <td> {props.username} </td>
                <td> {props.address} </td>
                <td> {props.phone} </td>
                <td> {props.birthday.substring(0, 10)} </td>
                <td> {props.email} </td>
                <td>
                  <Link
                    className="btn btn-warning btn-sm mx-1"
                    to={"/edit/" + props._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => {
                      this.deleteCustomer(props._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <br></br>
          <Link className="mx-3" to="/create">
            <Button variant="primary">New Customer </Button>
          </Link>
          <Link to="/ReportCus">
            <Button variant="primary">Generate Report </Button>
          </Link>
          <br></br>
        </table>

        <div style={{ float: "right" }}>/</div>
      </div>
    );
  }
}
