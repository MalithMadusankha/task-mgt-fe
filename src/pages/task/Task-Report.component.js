import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPDF from "jspdf";



const Task = props => ( 
    <tr>
    <td > { props.Task.Tid } </td> 
    <td > { props.Task.Taskname } </td> 
    <td > { props.Task.Taskcategory } </td> 
    <td > { props.Task.Modified.substring(0, 10) } </td> 
    <td > { props.Task.Description } </td> 
    <td > { props.Task.status } </td> 
    
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

    generatePDF = ()=>{
        var doc= new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("TaskReport.pdf");
            }

        });
    };


    render() {
        return ( 
            <div className = "container" >
            <div id="content" style = {{width:400,marginleft:10}}>
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <b > 
                <h4 >Report of the Task List </h4></b> 
                </div > 
                <div className = "col-lg-3 mt-2 mb-2" >
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

                    </tr>
                )

            }

            </tbody> 
            <br></br>

            

            <Link to = "/Task/" >
            <
            Button variant = "primary" >
            Back </Button> 
            </Link>

            <br></br>
            </table >
            </div>

            <div style = {
                { float: 'right' }
            } >

            
            </div>
            <button onClick={this.generatePDF} type="primary"> Generate PDF </button>

            </div>
        )
    }
}