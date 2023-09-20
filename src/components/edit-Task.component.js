import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default class EditTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeTid = this.onChangeTid.bind(this);
    this.onChangeTaskname = this.onChangeTaskname.bind(this);
    this.onChangeTaskcategory = this.onChangeTaskcategory.bind(this);
    this.onChangeModified = this.onChangeModified.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Tid: "",
      Taskname: "",
      Taskcategory: "",
      Modified: "",
      Description: "",
      status: "",

      Task: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Task/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          Tid: response.data.Tid,
          Taskname: response.data.Taskname,
          Taskcategory: response.data.Taskcategory,
          Modified: new Date(response.data.Modified),
          Description: response.data.Description,
          status: response.data.status,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/Task/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            Task: response.data.map((Task) => Task.Taskname),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //set the Tid

  onChangeTid(e) {
    this.setState({
      Tid: e.target.value,
    });
  }

  //set the Taskname

  onChangeTaskname(e) {
    this.setState({
      Taskname: e.target.value,
    });
  }
  //set Taskcategory
  onChangeTaskcategory(e) {
    this.setState({
      Taskcategory: e.target.value,
    });
  }

  //set Modified

  onChangeModified(date) {
    this.setState({
      Modified: date,
    });
  }
  //Set Description

  onChangeDescription(e) {
    this.setState({
      Description: e.target.value,
    });
  }

  //set status
  onChangestatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Task = {
      Tid: this.state.Tid,
      Taskname: this.state.Taskname,
      Taskcategory: this.state.Taskcategory,
      Modified: this.state.Modified,
      Description: this.state.Description,
      status: this.state.status,
    };

    console.log(Task);

    // axios
    //   .post(
    //     "http://localhost:5000/Task/update/" + this.props.match.params.id,
    //     Task
    //   )
    //   .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3> Update Task </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}> Task Code </label>
            <input
              type="text"
              required
              className="form-control"
              name="Task Code "
              placeholder="Task Code"
              value={this.state.Tid}
              onChange={this.onChangeTid}
            />
          </div>
          <div className="form-group">
            <label> Task Name: </label>
            <input
              type="text"
              required
              className="form-control"
              name="Task  Name"
              placeholder="Enter Task Name"
              value={this.state.Taskname}
              onChange={this.onChangeTaskname}
            />
          </div>
          <div className="form-group">
            <label> Category: </label>
            <input
              type="text"
              required
              className="form-control"
              name="Category"
              placeholder="Category"
              value={this.state.Taskcategory}
              onChange={this.onChangeTaskcategory}
            />
          </div>

          <div className="form-group">
            <label> Modified: </label>
            <div>
              <DatePicker
                selected={this.state.Modified}
                onChange={this.onChangeModified}
              />
            </div>
          </div>

          <div className="form-group">
            <label> Description: </label>
            <input
              type="text"
              required
              className="form-control"
              name="Description"
              placeholder="Enter Description"
              value={this.state.Description}
              onChange={this.onChangeDescription}
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
              value={this.state.status}
              onChange={this.onChangestatus}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
