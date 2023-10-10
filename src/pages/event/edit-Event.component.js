import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { AuthHeader } from "../../auth/AuthHeader";

export default function EditEvent() {
  const { id } = useParams();
  const [eventId, seteventId] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const [attend, setAttend] = useState([]);
  const [isAttend, setIsAttend] = useState(false);
  const [isSubmite, setIsSubmite] = useState(false);
  const [email, setEmail] = useState("");

  const userType = window.localStorage.getItem("userType");
  const userId = window.localStorage.getItem("userId");

  const checkAttend = (attend) => {
    for (let i = 0; i < attend.length; i++) {
      if (attend[i].customerId === userId) {
        return true; // Condition met, return true
      }
    }
    return false; // Condition not met, return false
  };

  useEffect(() => {
    getEvent();
  }, []); // eslint-disable-line

  const getEvent = () => {
    // Check if params and id exist before making the request
    if (id) {
      axios
        .get("http://localhost:5000/event/" + id, AuthHeader())
        .then((response) => {
          console.log("res ", response.data);
          seteventId(response.data.eventId);
          setname(response.data.name);
          setaddress(response.data.address);
          setphone(response.data.phone);
          setdate(new Date(response.data.date));
          setAttend(response.data.attend);
          // to hadle attend user
          setIsAttend(checkAttend(response.data.attend));
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
    let newAttend = attend;
    if (userType === "CUSTOMER") {
      console.log("isAttend", isAttend);

      if (isAttend) {
        newAttend = attend.filter((el) => el.customerId !== userId);
      } else {
        newAttend.push({ customerId: userId });
      }
    }

    const Event = {
      eventId,
      name,
      address,
      phone,
      date,
      attend: newAttend,
    };

    console.log(Event);

    axios
      .put("http://localhost:5000/event/update/" + id, Event, AuthHeader())
      .then((res) => {
        console.log(res.data);
        alert("Successfully updated ");
        setIsSubmite(true);
      });

    if (userType === "CUSTOMER") {
      if (email === "") {
        return;
      }
      const Email = {
        to: email,
        subject: "Even Boking Confirmation for " + name,
        text: `You have ${
          isAttend ? "cancel booking" : "booked"
        } ${name} event. Date is ${date
          .toString()
          .slice(
            0,
            15
          )}. If you want to contact us call this number ${phone}. Thank you for Booking`,
      };

      console.log("email det : ", Email);

      axios.post("http://localhost:5000/Email/send", Email).then((res) => {
        console.log(res.data);
        alert("Successfully Sent Email ");
        setIsSubmite(true);
      });
    }
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
            disabled={userType !== "ADMIN"}
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
            disabled={userType !== "ADMIN"}
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
            disabled={userType !== "ADMIN"}
            onChange={onChangeAddress}
          />
        </div>

        <div className="form-group">
          <label> Phone: </label>
          <input
            type="text"
            required
            className="form-control"
            maxLength="10"
            name="Phone"
            placeholder="Enter Phone"
            value={phone}
            disabled={userType !== "ADMIN"}
            onChange={onChangePhone}
          />
        </div>

        <div className="form-group">
          <label>Event Date: </label>
          <div>
            <DatePicker
              disabled={userType !== "ADMIN"}
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        {userType === "CUSTOMER" ? (
          <div className="form-group">
            <label> email: </label>
            <input
              type="text"
              className="form-control"
              name="Email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : null}

        <div className="form-group">
          {userType === "ADMIN" ? (
            <input
              type="submit"
              value="Update"
              className="btn btn-primary my-3"
              disabled={isSubmite}
            />
          ) : userType === "CUSTOMER" ? (
            <input
              type="submit"
              value={isAttend ? "Cancel Booking" : "Attend"}
              className="btn btn-primary my-3"
              disabled={isSubmite}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}
