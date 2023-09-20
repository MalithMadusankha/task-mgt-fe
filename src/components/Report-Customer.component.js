import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import jsPDF from "jspdf";


const Customer = props => ( 
   
   <tr>
    <td> { props.Customer.Cid } </td> <
    td > { props.Customer.username } </td> <
    td > { props.Customer.Address } </td> <
    td > { props.Customer.Phone } </td> <
    td > { props.Customer.birthday.substring(0, 10) } </td> 
    <td> { props.Customer.Email } </td> 

     </tr> 
)

export default class CustomerList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Customer: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Customer/')
            .then(response => {
                this.setState({ Customer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Customer/')
            .then(response => {
                this.setState({ Customer: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCustomer(id) {
        if (window.confirm('Are you sure?')) {


            axios.delete('http://localhost:5000/Customer/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                    Customer: this.state.Customer.filter(el => el._id !== id)
                })
                //}
        }
    }

    CustomerList() {
        return this.state.Customer.map(currentCustomer => {
            return <Customer Customer = { currentCustomer }
            deleteCustomer = { this.deleteCustomer }
            key = { currentCustomer._id }
            />;
        })
    }


    filterData(Customer, searchKey) {

        this.setState({
            Customer: this.state.Customer.filter(el => el.Username = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Customer/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.username.includes(searchKey)
            )

            this.setState({ Customer: result })

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
      
        return ( 

            
        <div className = "container" >

        <div id="content" style = {{width:400,marginleft:10}}>
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            b > <
            h4 > Customer Report < /h4> </b > < /
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
            th > Cid < /th> <
            th > Customer Name < /th> <
            th > Address < /th> <
            th > Phone < /th> <
            th > Birth Day < /th> <
            th > Email < /th>  < /
            tr > <
            /thead> <
            tbody > {
                this.state.Customer.map(props =>
                    <
                    tr key = { props.id } >
                    <
                    td > { props.Cid } < /td> <
                    td > { props.username } < /td>  <
                    td > { props.Address } < /td>  < 
                    td > { props.Phone } < /td> <
                    td > { props.birthday.substring(0, 10) } < /td>  < 
                    td > { props.Email } < /td>  

                    <
                    /tr>
                )

            }

            <
            /tbody>
            <br></br>
            

            <Link to = "/Customer" >
            <Button variant = "primary" >
            Back <
            /Button> 
            </Link >


        

            <br></br>
             < /table>
             </div>
            <
            div style = {
                { float: 'right' }
            } >

            /
            

            <
            /div>

          

            <button onClick={this.generatePDF} type="primary"> Generate PDF </button>
            <
            /div>
        )
    }
}
