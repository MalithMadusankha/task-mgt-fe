import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function TaskList() {
  const location = useLocation();
  const layout = location.pathname.split("/")[1];
  const [Task, setTask] = useState([]);

  const deleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete("http://localhost:5000/Task/" + id).then((response) => {
        console.log(response.data);
      });

      setTask(Task.filter((el) => el._id !== id));
    }
  };

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:5000/Task/").then((response) => {
      const resultt = response.data;
      const result = resultt.filter((props) =>
        props.Taskname.includes(searchKey)
      );

      setTask(result);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/Task/")
      .then((response) => {
        setTask(response.data);
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
            <h4> Task List </h4>
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
            <th> Task ID </th>
            <th> Task Name </th>
            <th> Task Category </th>
            <th> Modified </th>
            <th> Description </th>
            <th> status </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {Task.map((props) => (
            <tr key={props.id}>
              <td> {props.Tid} </td>
              <td> {props.Taskname} </td>
              <td> {props.Taskcategory} </td>
              <td> {props.Modified.substring(0, 10)} </td>
              <td> {props.Description} </td>
              <td> {props.status} </td>

              <td>
                <Link
                  className="btn btn-warning btn-sm mx-1"
                  to={`/${layout}/Task/edit/${props._id}`}
                >
                  Edit
                </Link>
                {layout === "admin" ? (
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => {
                      deleteTask(props._id);
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
            <Link to="/admin/Task/add">
              <Button variant="primary">New Task </Button>
            </Link>
            <Link to="/ReportTask/">
              <Button variant="primary">Generate Report </Button>
            </Link>
          </>
        ) : null}

        <br></br>
      </table>

      <div style={{ float: "right" }}></div>
    </div>
  );
}
