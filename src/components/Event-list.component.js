import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Event = (props) => (
  <tr>
    <td> {props?.Event?.eventId} </td>
    <td> {props?.Event?.name} </td>
    <td> {props?.Event?.address} </td>
    <td> {props?.Event?.phone} </td>
    <td> {props?.Event?.date.substring(0, 10)} </td>
    <td>
      <Link
        className="btn btn-warning btn-sm mx-1"
        to={"/edit/" + props?.Event?._id}
      >
        Edit
      </Link>
      |
      <button
        className="btn btn-danger btn-sm mx-1"
        onClick={() => {
          props.deleteCustomer(props?.Event?._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default class EventList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Event: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/event/")
      .then((response) => {
        console.log("response", response.data);
        this.setState({ Event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEvent(id) {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/event/" + id).then((response) => {
        console.log(response.data);
      });

      this.setState({
        Event: this.state.Event.filter((el) => el._id !== id),
      });
      //}
    }
  }

  EventList() {
    return this.state.Event.map((currentEvent) => {
      return (
        <Event
          Event={currentEvent}
          deleteEvent={this.deleteEvent}
          key={currentEvent._id}
        />
      );
    });
  }

  filterData(Event, searchKey) {
    this.setState({
      Event: this.state.Event.filter((el) => (el.Username = searchKey)),
    });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/event/").then((response) => {
      const resultt = response.data;
      const result = resultt.filter(
        (props) =>
          props.name.includes(searchKey) ||
          props.eventId.includes(searchKey) ||
          props.address.includes(searchKey)
      );

      this.setState({ Event: result });
    });
  };

  render() {
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
              onChange={this.handleSearchArea}
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
            {this.state.Event.map((props) => (
              <tr key={props?._id}>
                <td> {props?.eventId} </td>
                <td> {props?.name} </td>
                <td> {props?.address} </td>
                <td> {props?.date.substring(0, 10)} </td>
                <td> {props?.phone} </td>
                <td>
                  <Link
                    className="btn btn-warning btn-sm mx-1"
                    to={"/admin/event/edit/" + props?._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => {
                      this.deleteEvent(props?._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <br></br>
          <Link className="mx-3" to="/admin/event/create">
            <Button variant="primary">New Event </Button>
          </Link>
          <Link to="/admin/ReportEvent">
            <Button variant="primary">Generate Report </Button>
          </Link>
          <br></br>
        </table>

        <div style={{ float: "right" }}>/</div>
      </div>
    );
  }
}
