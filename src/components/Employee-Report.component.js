import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPDF from "jspdf";



const Employee = props => ( <
    tr >
    <
    td > { props.Employee.Eid } < /td> <
    td > { props.Employee.username } < /td> <
    td > { props.Employee.Address } < /td> <
    td > { props.Employee.Phone } < /td> <
    td > { props.Employee.birthday.substring(0, 10) } < /td> <
    td > { props.Employee.Position } < /td> <
    td > { props.Employee.Gender } < /td> <
    td >
     < /
    td > <


    /tr> 
)

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Employee: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Employee/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Employee: this.state.Employee.filter(el => el._id !== id)
            })
        }
    }

    EmployeeList() {
        return this.state.Employee.map(currentEmployee => {
            return <Employee Employee = { currentEmployee }
            deleteEmployee = { this.deleteEmployee }
            key = { currentEmployee._id }
            />;
        })
    }


    filterData(Employee, searchKey) {

        this.setState({
            Employee: this.state.Employee.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Employee/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ Employee: result })

        });

    }

    generatePDF = ()=>{
        var doc= new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("mypdf.pdf");
            }

        });
    };

    render() {
        return ( <
            div className = "container" >

            <div id="content" style = {{width:400,marginleft:10}}>
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > Report of Employees < /h4> < /
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
             < /
            div > <
            /div>






            <
            table className = "table" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Employee ID < /th> <
            th > Employee Name < /th> <
            th > Address < /th> <
            th > Phone < /th> <
            th > Birthday < /th> <
            th > Position < /th> <
            th > Gender < /th>  < /
            tr > <
            /thead> <
            tbody > {
                this.state.Employee.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.Eid } < /td> <
                    td > { props.username } < /td>  <
                    td > { props.Address } < /td>  < 
                    td > { props.Phone } < /td> <
                    td > { props.birthday.substring(0, 10) } < /td>  < 
                    td > { props.Position } < /td>  < 
                    td > { props.Gender } < /td>  

                    <
                    /tr>
                )

            }

            <
            /tbody> 
            <br></br>
            <Link to = "/Employee" >
            <
            Button variant = "primary" >
            Back
            </Button> 
            </Link >

            <br></br>
            < /table >
            </div>

            <
            div style = {
                { float: 'right' }
            } >

           
            <
            /div>

            <button onClick={this.generatePDF} type="primary"> Generate PDF </button>

            <
            /div>
        )
    }
}