import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function EventList() {
  const location = useLocation();
  const layout = location.pathname.split("/")[1];
  const [Event, setEvent] = useState([]);

  const deleteEvent = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/event/" + id).then((response) => {
        console.log(response.data);
      });

      setEvent(Event.filter((el) => el._id !== id));
    }
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/event/").then((response) => {
      const resultt = response.data;
      const result = resultt.filter(
        (props) =>
          props.name.includes(searchKey) ||
          props.eventId.includes(searchKey) ||
          props.address.includes(searchKey)
      );

      setEvent(result);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/event/")
      .then((response) => {
        console.log("response", response.data);
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="m-3">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <b>
            <h4> Event List </h4>
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
            <th className="m-0 p-0"> Event ID </th>
            <th> Event Name </th>
            <th> Address </th>
            <th> Event Date </th>
            <th> Phone </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {Event.map((props) => (
            <tr key={props?._id}>
              <td> {props?.eventId} </td>
              <td> {props?.name} </td>
              <td> {props?.address} </td>
              <td> {props?.date.substring(0, 10)} </td>
              <td> {props?.phone} </td>
              <td>
                <Link
                  className="btn btn-warning btn-sm mx-1"
                  to={`/${layout}/event/edit/${props?._id}`}
                >
                  {layout === "admin" ? "Edit" : "Attend"}
                </Link>
                {layout === "admin" ? (
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => {
                      deleteEvent(props?._id);
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
        <br></br>
        {layout === "admin" ? (
          <>
            <Link className="mx-3" to="/admin/event/create">
              <Button variant="primary">New Event </Button>
            </Link>
            <Link to="/admin/ReportEvent">
              <Button variant="primary">Generate Report </Button>
            </Link>
          </>
        ) : null}

        <br></br>
      </table>

      <div style={{ float: "right" }}>/</div>
    </div>
  );
}
