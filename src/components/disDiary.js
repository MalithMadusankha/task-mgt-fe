import React, { useState } from "react";
import axios from "axios";

function AddDia() {
  let [id, setId] = useState("");
  let [date, setDate] = useState("");
  let [event, setEvent] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newEvent = {
      id,
      date,
      event,
    };

    axios
      .post("http://localhost:8070/diary/di", newEvent)
      .then(() => {
        alert("Event Added");
        setId("");
        setDate("");
        setEvent("");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="container mb-5">
      <br />
      <br />
      <div>
        <a className="a" href="/adddi">
          Add For Diary
        </a>
      </div>
      <br />
      <br />

      <form onSubmit={sendData} className="e">
        <div className="mb-3">
          <label for="validationCustomUsername" className="form-label">
            <h3 className="d">Diary ID</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            placeholder=" ID...."
            aria-describedby="Enter Diary ID"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            {" "}
            <h3 className="d">Date</h3>
          </label>
          <input
            type="Date"
            className="form-control"
            id="name"
            placeholder="Event name...."
            aria-describedby="Enter Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="validationCustomUsername" className="form-label">
            <h3 className="d">Event ID</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            placeholder=" ID...."
            aria-describedby="Enter Diary ID"
            onChange={(e) => {
              setEvent(e.target.value);
            }}
          />
        </div>
        <div className="container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDia;
