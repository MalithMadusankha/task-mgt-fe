import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

export default function EditCustomer() {
  const { id } = useParams();
  const [Cid, setCid] = useState("");
  const [username, setusername] = useState("");
  const [Address, setAddress] = useState("");
  const [birthday, setbirthday] = useState("");
  const [selectDate, setselectDate] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = () => {
    // Check if params and id exist before making the request
    if (id) {
      axios
        .get("http://localhost:5000/Customer/" + id)
        .then((response) => {
          console.log("res ", response.data);
          setCid(response.data.Cid);
          setusername(response.data.username);
          setAddress(response.data.Address);
          setbirthday(response.data.birthday);
          setPhone(response.data.Phone);
          setEmail(response.data.Email);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onChangeusername = (e) => {
    setusername(e.target.value);
  };
  //set Address
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  //set Phone

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  //Set birthday

  const onChangebirthday = (date) => {
    console.log("date", date);
    setselectDate(date);
  };

  //set Email
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Customer = {
      Cid: Cid,
      username: username,
      Address: Address,
      Phone: Phone,
      birthday: selectDate ? selectDate : birthday,
      Email: Email,
    };

    console.log(Customer);

    axios
      .post("http://localhost:5000/Customer/update/" + id, Customer)
      .then((res) => {
        console.log(res.data);
        alert("Successfully updated ");
      });
  };

  return (
    <div className="container mb-5">
      <h3> Update Customer </h3>

      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}> Customer Code </label>
          <input
            type="text"
            required
            className="form-control"
            name="Customer Code "
            placeholder="Customer Code"
            value={Cid}
            disabled
          />
        </div>
        <div className="form-group">
          <label> User Name: </label>
          <input
            type="text"
            required
            className="form-control"
            name="User Name"
            placeholder="Enter User Name"
            value={username}
            onChange={onChangeusername}
          />
        </div>
        <div className="form-group">
          <label> Address: </label>
          <input
            type="text"
            required
            className="form-control"
            name="Address"
            placeholder="Enter Address"
            value={Address}
            onChange={onChangeAddress}
          />
        </div>

        <div className="form-group">
          <label> Phone: </label>
          <input
            type="text"
            required
            className="form-control"
            maxlength="10"
            name="Phone"
            placeholder="Enter Phone"
            value={Phone}
            onChange={onChangePhone}
          />
        </div>

        <div className="form-group">
          <label>Birthday: {selectDate ? null : birthday.slice(0, 10)}</label>
          <div>
            <DatePicker selected={selectDate} onChange={onChangebirthday} />
          </div>
        </div>

        <div className="form-group">
          <label> Email: </label>
          <input
            type="text"
            required
            className="form-control"
            name="Email"
            placeholder="Enter Email"
            value={Email}
            onChange={onChangeEmail}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
