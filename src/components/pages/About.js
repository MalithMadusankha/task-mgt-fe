import React from "react";
import VMC from "./inc/Vmc";

function Aboutus() {
  return (
    <div className="container mb-5">
      <section className="py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> About Us</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container">
          <h5 className="main-heading"> Goni Saviya</h5>
          <div className="underline"></div>
          <p>
            Govi Saviya is an agricultural farm that has been there in the
            industry for a considerable time period. It is a well reputed,
            highly demanding agricultural farm having a significant customer
            base. They are planting a variety of cultivated crops using new
            technologies with an experienced and well-knowledged staff. They
            also have a lot of inventories such as cultivated crops, types of
            equipment, plants, seeds and fertilizer etc. Govi Saviya
            agricultural farm face several difficulties when noting down their
            daily activities, when memorizing the time period to get the harvest
            of each crop in future and when having intermediaries to sell their
            products. As a solution for these problems Govi Saviya requires a
            software system to manipulate their resources in a very efficient
            manner where they can update a farm diary, have a task schedular to
            make a wellorganized plantation plan and have a customer online
            order service to sell their products avoiding the intermediaries so
            that they can sell their products to customers(buyer) for a
            reasonable price.
          </p>
        </div>
      </section>

      {/*Our vision,mission and values*/}
      <VMC />
    </div>
  );
}

export default Aboutus;
