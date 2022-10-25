import React from "react";
import Back from "../../components/Back/Back";
import "./ServicePage.css";

function ServicePage() {
  return (
    <div>
      <Back name="Our Services" title="our services" />
      <div
        style={{
          marginTop: "20px",
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col l12">
            <h4 className="center">Our Services</h4>
            <p>
              Shankar Real Estate offers the best Real Estate Service in
              Bangalore. We specialize in providing services for Buying,
              Selling, Leasing, and Renting of various kinds of properties be it
              commercial, residential, industrial, agricultural etc
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "0px 20px",
        }}
        className="container-fluid"
      >
        <div className="row">
          <SingleService title="Residential" text="Residential land/plot/Site">
            <p>Flat/Apartment</p>
            <p>Individual house/Villa</p>
            <p> Farm house </p>
            <p>Builder Floor </p>
            <p>Heritage/ancient property</p>
          </SingleService>
          <SingleService title="Commercial" text="  Commercial land">
            <p>Commercial shop/space</p>
            <p>Shopping complex/mall</p>
            <p>Office space</p>
            <p>Godown/Ware house</p>
            <p>Showroo</p>
          </SingleService>
          <SingleService title="Industrial" text="Industrial land/plot/Site">
            <p>Warehouse/godown </p>
            <p> Factory/industry</p>
          </SingleService>
          <SingleService title="Agricultural " text="Farm land">
            <p>Agricultural land</p>
          </SingleService>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col l12">
            <p>
              So, contact us today to obtain our real estate and construction
              services at the best and most affordable price in today's market.
              Do navigate through our portfolio to know more about the services
              we are offering to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;

const SingleService = ({ title, text, src, children }) => {
  return (
    <>
      <div className="col l3 s12">
        <div className="single_service_wrap">
          <div className="center">
            <img className="responsive-img" src={src} alt="" />
          </div>
          <div className="center">
            <h5>{title}</h5>

            <p>{text}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
