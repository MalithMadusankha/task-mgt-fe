import React, { useState } from "react";
import axios from "axios";

function Adddeilery() {
  const [Dname, setName] = useState("");
  const [status, setStatus] = useState("");
  const [Shipaddress, setShipAddress] = useState("");
  const [Billaddress, setBillAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");
  const [date, setDate] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newDelivery = {
      Dname,
      status,
      Shipaddress,
      Billaddress,
      phone,
      method,
      date,
    };

    axios
      .post("http://localhost:8070/deliver/add", newDelivery)
      .then(() => {
        alert("Confirmation Added");
        setName("");
        setStatus("");
        setShipAddress("");
        setBillAddress("");
        setPhone("");
        setMethod("");
        setDate("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container mb-5">
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={sendData}>
        <div className="form-group">
          <label for="Dname">Delivery Person Name</label>
          <input
            type="text"
            className="form-control"
            id="Dname"
            placeholder="Enter Dilivery person name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="status">Delivery status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            placeholder="Enter order status"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="Shipaddress">Shipping Address</label>
          <input
            type="text"
            className="form-control"
            id="Shipaddress"
            placeholder="Enter ship address"
            onChange={(e) => {
              setShipAddress(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="Billaddress">Billing Address</label>
          <input
            type="text"
            className="form-control"
            id="Billaddress"
            placeholder="Enter billing address"
            onChange={(e) => {
              setBillAddress(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="phone">Customer Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter customer phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="method">Method of delivery</label>
          <input
            type="text"
            className="form-control"
            id="method"
            placeholder="Enter Pay method"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="date">Delivery Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="Enter date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Confirm Delivery
        </button>
      </form>
    </div>
  );
}

export default Adddeilery;
