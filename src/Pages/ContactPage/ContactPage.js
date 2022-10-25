import React from "react";
import Back from "../../components/Back/Back";
import ContactForm from "../../components/ContactForm/ContactForm";

function ContactPage() {
  return (
    <div>
      <Back name="Contact Page" title="Contact Us" />

      <div className="container">
        <div
          style={{
            marginTop: 20,
          }}
          className="row"
        >
          <SingleCont
            title={"Address"}
            text="#21, 50ft. Main Road , NGEF Layout, Sanjay Nagar, Bengaluru- 560094"
            src="https://bricksandroof.com/wp-content/uploads/2022/06/office-building.png"
          />
          <SingleCont
            title={"Phone Number"}
            text="+91 99010 55002"
            src="https://bricksandroof.com/wp-content/uploads/2022/06/phone-call-1.png"
          />
          <SingleCont
            title="Email Address"
            text="info@shankarrealestate.com"
            src="https://bricksandroof.com/wp-content/uploads/2022/06/email.png"
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;

const SingleCont = ({ title, text, src }) => {
  return (
    <>
      <div className="col l4 s12">
        <div className="single_service_wrap">
          <div className="center">
            <img className="responsive-img" src={src} alt="" />
          </div>
          <div className="center">
            <h5>{title}</h5>

            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
