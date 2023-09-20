import React from 'react';
import Slider from '/images/inc/Slider';
import { Link } from 'react-router-dom';
import VMC from '/images/inc/Vmc';
import Service1 from '/images/image 14.png'
import Service2 from '/images/image 17.jpg'
import Service3 from '/images/image 23.jpeg'

function Home() {
    return ( <
        div >
        <
        Slider / >

        <
        section className = "section" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-12 text-center" >
        <
        h3 className = "main-heading" > GOVI SAVIYA < /h3> <
        div className = "underline mx-auto" > < /div> <
        p >
        Govi Saviya is an agricultural farm that has been there in the industry
        for a considerable time period.It is a well reputed, highly demanding agricultural farm having a significant customer base.They are planting a variety of cultivated crops using new technologies with an experienced and well - knowledged staff.They also have a lot of inventories such as cultivated crops, types of equipment, plants, seeds and fertilizer etc.Govi Saviya agricultural farm face several difficulties when noting down their daily activities, when memorizing the time period to get the harvest of each crop in future and when having intermediaries to sell their products.As a solution
        for these problems Govi Saviya requires a software system to manipulate their resources in a very efficient manner where they can update a farm diary, have a task schedular to make a well organized plantation plan and have a customer online order service to sell their products avoiding the intermediaries so that they can sell their products to customers(buyer) for a reasonable price. <
        /p> <
        Link to = "/about"
        className = "btn btn-warning shadow" > Read More < /Link>

        <
        /div> < /
        div > <
        /div> < /
        section >


        { /*Our vision,mission and values*/ } <
        VMC / >

        { /*Our Services*/ }

        <
        section className = "section border-top" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-12 mb-5 text-center" >
        <
        h3 className = "main-heading" > Our Services < /h3> <
        div className = "underline mx-auto" > < /div> < /
        div > <
        div className = "col-md-4 " >
        <
        div className = "card shadow" >
        <
        img src = { Service1 }
        className = "w-100 border-bottom"
        alt = "Services" / >
        <
        div className = "card-body" >
        <
        h6 > Cultivate crops in Lands < /h6> <
        div className = "underline" > < /div> <
        p >
        Customers can contact us to get the service
        for cultivating crops in their lands.Also we looking them after upto 2 weeks and
        if their any requirements we are providing them.

        <
        /p> <
        Link to = "/services"
        className = "btn btn-link" > Read more < /Link> < /
        div > <
        /div> < /
        div > <
        div className = "col-md-4 " >
        <
        div className = "card shadow" >
        <
        img src = { Service2 }
        className = "w-100 border-bottom"
        alt = "Services" / >
        <
        div className = "card-body" >
        <
        h6 > Supply fertilizer <
        /h6> <
        div className = "underline" > < /div> <
        p >
        In this farm we only use organic fertilizers and we make organic fertilizers at our farm and they are 100 % organic.We are providing them to our customers. <
        /p> <
        Link to = "/services"
        className = "btn btn-link" > Read more < /Link> < /
        div > <
        /div>

        <
        /div>

        <
        div className = "col-md-4 " >
        <
        div className = "card shadow" >
        <
        img src = { Service3 }
        className = "w-100 border-bottom"
        alt = "Services" / >
        <
        div className = "card-body" >
        <
        h6 > Provide equipment < /h6> <
        div className = "underline" > < /div> <
        p >
        We are renting out types of equipment that need to use when cultivating crops.We are using new technologies in our farm to get the maximum harvest <
        /p> <
        Link to = "/services"
        className = "btn btn-link" > Read more < /Link> < /
        div > <
        /div>

        <
        /div>



        <
        /div> < /
        div > <
        /section>


        <
        /div>
    );

}

export default Home;