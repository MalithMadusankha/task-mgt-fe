import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';




const Task = props => ( 
    <tr >
    <td > { props.Task.Tid } </td> 
    <td > { props.Task.Taskname } </td> 
    <td > { props.Task.Taskcategory } </td> 
    <td > { props.Task.Modified.substring(0, 10) } </td> 
    <td > { props.Task.Description } </td> 
    <td > { props.Task.status } </td> 
    
    <td >
    <Link to = { "/edit/" + props.Task._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteTask(props.Task._id) }}>Delete</a > 
    </td > 
    
    </tr> 
)

export default class TaskList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Task: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Task/')
            .then(response => {
                this.setState({ Task: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Task/')
            .then(response => {
                this.setState({ Task: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTask(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Task/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Task: this.state.Task.filter(el => el._id !== id)
            })
        }
    }

    TaskList() {
        return this.state.Task.map(currentTask => {
            return <Task Task = { currentTask }
            deleteTask = { this.deleteTask }
            key = { currentTask._id }
            />;
        })
    }


    filterData(Task, searchKey) {

        this.setState({
            Task: this.state.Task.filter(el => el.Taskname = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Task/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Taskname.includes(searchKey)
            )

            this.setState({ Task: result })

        });

    }

    render() {
        return ( 
            <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <b > 
                <h4 > Task List </h4></b> 
                </div > 
                <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control"
            type = "search"
            placeholder = "Search"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </input> 
            </div > 
            </div>






            <table className = "table" >
            <thead className = "thead-light" >
            <tr >
            <th > Task ID </th> 
            <th > Task Name </th> 
            <th > Task Category </th> 
            <th > Modified </th> 
            <th > Description </th> 
            <th > status </th> 
            <th > Actions </th> 
            </tr > 
            </thead> 
            <tbody > {
                this.state.Task.map(props =>
                    <tr key = { props.id } >
                    <td > { props.Tid } </td> 
                    <td > { props.Taskname } </td>  
                    <td > { props.Taskcategory } </td>  
                    <td > { props.Modified.substring(0, 10) } </td>  
                    <td > { props.Description } </td>  
                    <td > { props.status } </td>  
                    
                    <td >
                    <Link to = { "/Taskedit/Edit/" + props._id } > Edit </Link> | <a href="" onClick={() => { this.deleteTask(props._id) }}>Delete</a > 
                    </td>

                    </tr>
                )

            }

            </tbody> 
            <br></br>

            <Link to = "/Taskcre/" >
            <
            Button variant = "primary" >
            New Task </Button> 
            </Link>
            <br></br><br></br>
            <Link to = "/ReportTask/" >
            <
            Button variant = "primary" >
            Generate Report </Button> 
            </Link>

            <br></br>
            </table >

            <div style = {
                { float: 'right' }
            } >

            
            </div>

            </div>
        )
    }
}