import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function EditTask() {
  const location = useLocation();
  const layout = location.pathname.split("/")[1];
  const { id } = useParams();
  const [Tid, setTid] = useState("");
  const [Taskname, setTaskname] = useState("");
  const [Taskcategory, setTaskcategory] = useState("");
  const [Modified, setModified] = useState("");
  const [Description, setDescription] = useState("");
  const [status, setstatus] = useState("");

  const getTask = () => {
    axios
      .get("http://localhost:5000/Task/" + id)
      .then((response) => {
        setTid(response.data.Tid);
        setTaskname(response.data.Taskname);
        setTaskcategory(response.data.Taskcategory);
        setDescription(response.data.Description);
        setstatus(response.data.status);
        setModified(new Date(response.data.Modified));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //set the Tid

  const onChangeTid = (e) => {
    setTid(e.target.value);
  };

  //set the Taskname

  const onChangeTaskname = (e) => {
    setTaskname(e.target.value);
  };
  //set Taskcategory
  const onChangeTaskcategory = (e) => {
    setTaskcategory(e.target.value);
  };

  //set Modified

  const onChangeModified = (date) => {
    setModified(date);
  };
  //Set Description

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  //set status
  const onChangestatus = (e) => {
    setstatus(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Task = {
      Tid: Tid,
      Taskname: Taskname,
      Taskcategory: Taskcategory,
      Modified: Modified,
      Description: Description,
      status: status,
    };

    console.log(Task);

    axios.post("http://localhost:5000/Task/update/" + id, Task).then((res) => {
      console.log(res.data);
      alert("Update Task");
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="container mb-5">
      <h3> Update Task </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}> Task Code </label>
          <input
            disabled={layout !== "admin"}
            type="text"
            required
            className="form-control"
            name="Task Code "
            placeholder="Task Code"
            value={Tid}
            onChange={onChangeTid}
          />
        </div>
        <div className="form-group">
          <label> Task Name: </label>
          <input
            disabled={layout !== "admin"}
            type="text"
            required
            className="form-control"
            name="Task  Name"
            placeholder="Enter Task Name"
            value={Taskname}
            onChange={onChangeTaskname}
          />
        </div>
        <div className="form-group">
          <label> Category: </label>
          <input
            disabled={layout !== "admin"}
            type="text"
            required
            className="form-control"
            name="Category"
            placeholder="Category"
            value={Taskcategory}
            onChange={onChangeTaskcategory}
          />
        </div>

        <div className="form-group">
          <label> Modified: </label>
          <div>
            <DatePicker
              disabled={layout !== "admin"}
              selected={Modified}
              onChange={onChangeModified}
            />
          </div>
        </div>

        <div className="form-group">
          <label> Description: </label>
          <input
            disabled={layout !== "admin"}
            type="text"
            required
            className="form-control"
            name="Description"
            placeholder="Enter Description"
            value={Description}
            onChange={onChangeDescription}
          />
        </div>

        <div className="form-group">
          <label> status: </label>
          <input
            type="text"
            required
            className="form-control"
            name="status"
            placeholder="Enter status"
            value={status}
            onChange={onChangestatus}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Update"
            className="btn btn-primary mt-3"
          />
        </div>
      </form>
    </div>
  );
}
