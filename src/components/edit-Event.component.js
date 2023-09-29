import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

export default function EditEvent() {
  const { id } = useParams();
  const [eventId, seteventId] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const [attend, setAttend] = useState([]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = () => {
    // Check if params and id exist before making the request
    if (id) {
      axios
        .get("http://localhost:5000/event/" + id)
        .then((response) => {
          console.log("res ", response.data);
          seteventId(response.data.eventId);
          setname(response.data.name);
          setaddress(response.data.address);
          setphone(response.data.phone);
          setdate(new Date(response.data.date));
          setAttend(response.data.attend);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onChangename = (e) => {
    setname(e.target.value);
  };
  //set Address
  const onChangeAddress = (e) => {
    setaddress(e.target.value);
  };

  //set Phone

  const onChangePhone = (e) => {
    setphone(e.target.value);
  };
  //Set birthday

  const onChangeDate = (date) => {
    setdate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Event = {
      eventId,
      name,
      address,
      phone,
      date,
      attend,
    };

    console.log(Event);

    axios
      .post("http://localhost:5000/event/update/" + id, Event)
      .then((res) => {
        console.log(res.data);
        alert("Successfully updated ");
      });
  };

  return (
    <div className="container mb-5">
      <h3> Update Event </h3>

      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}> Event Code </label>
          <input
            type="text"
            required
            className="form-control"
            name="Event Code "
            placeholder="Event Code"
            value={eventId}
            onChange={(e) => seteventId(e.target.value)}
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
            value={name}
            onChange={onChangename}
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
            value={address}
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
            value={phone}
            onChange={onChangePhone}
          />
        </div>

        <div className="form-group">
          <label>Event Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
