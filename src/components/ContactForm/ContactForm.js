import React from "react";

function ContactForm() {
  return (
    <>
      <div className="row">
        <h5 className="center">
          For more information about our services, get in touch with our expert
          consultants. We're always eager to hear from you!
        </h5>
      </div>

      <div class="row">
        <div className="col l2"></div>
        <form class="col l8 center">
          <div class="row">
            <div className="col l6">
              <div class="input-field input-outlined  ">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
            </div>
            <div className="col l6">
              <div class="input-field input-outlined ">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col l6">
              <div class="input-field input-outlined ">
                <input id="email" type="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="col l6">
              <div class="input-field input-outlined">
                <input id="phone" type="number" class="validate" />
                <label for="phone">Phone Number</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col l12">
              <div className=" input-field input-outlined ">
                <textarea
                  // onChange={(e) => setDescription(e.target.value)}
                  style={{
                    height: "200px",
                    background: "#fff",
                    padding: "10px 10px",
                    resize: "vertical",
                  }}
                  // minLength
                  id="message"
                  type="text"
                ></textarea>
                <label htmlFor="message">message</label>
              </div>
            </div>
          </div>
        </form>
        <div className="col l2"></div>
      </div>
    </>
  );
}

export default ContactForm;
