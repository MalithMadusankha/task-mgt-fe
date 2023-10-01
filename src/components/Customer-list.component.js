import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function CustomerList() {
  const location = useLocation();
  const layout = location.pathname.split("/")[1];
  const [Customer, setCustomer] = useState([]);

  const getCustomers = () => {
    axios
      .get("http://localhost:5000/user/type/CUSTOMER")
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCustomer = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/user/" + id).then((response) => {
        console.log(response.data);
      });

      setCustomer(Customer.filter((el) => el._id !== id));
    }
  };

  const customerList = () => {
    return Customer.map((currentCustomer) => {
      return (
        <Customer
          Customer={currentCustomer}
          deleteCustomer={deleteCustomer}
          key={currentCustomer._id}
        />
      );
    });
  };

  const filterData = (Customer, searchKey) => {
    setCustomer(Customer.filter((el) => (el.Username = searchKey)));
  };

  const handleSearchArea = (e) => {
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

      setCustomer(result);
    });
  };

  useEffect(() => {
    getCustomers();
    console.log(location.pathname.split("/"));
  }, []);

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
            onChange={handleSearchArea}
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
          {Customer.map((props) => (
            <tr key={props.id}>
              <td className="m-0 p-0"> {props.userId} </td>
              <td> {props.username} </td>
              <td> {props.address} </td>
              <td> {props.phone} </td>
              <td> {props.birthday.substring(0, 10)} </td>
              <td> {props.email} </td>

              {layout === "admin" ? (
                <td>
                  <Link
                    className="btn btn-warning btn-sm mx-1"
                    to={`admin/edit/${props._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => {
                      deleteCustomer(props._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              ) : null}
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
