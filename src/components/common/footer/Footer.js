import React from "react";
import { footer } from "../../../assets/data/Data";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="row">
            <div className="col l7">
              <div className="text">
                <h6>Do You Have Questions ?</h6>
                <p>We'll help you to grow your career and growth.</p>
              </div>
            </div>
            <div className="col l5">
              <div className="levbitz_mobo_btn">
                <Link to="/contact" className="btn5">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>

                <h6>Do You Need Help With Anything?</h6>
                <p>
                  Receive updates, hot deals, tutorials, discounts sent straignt
                  in your inbox every month
                </p>
              </div>
            </div>
            <div className="col l3 s4">
              {footer.map((val) => (
                <div className="box">
                  <h6>{val.title}</h6>
                  <ul>
                    {val.text.map((items) => (
                      <li>
                        <Link className="white-text" to={`${items.path}`}>
                          {items.list}
                        </Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col l3 s8">
              <div>
                <h6>COMPANY</h6>
                <ul>
                  <li>info@shankarrealestate.com</li>
                  <li>+919845169306</li>
                  <li>
                    #21, 50ft. Main Road , NGEF Layout, Sanjay Nagar, Bengaluru-
                    560094
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>
          © 2022 Shankar Real estate. powered By {""}
          <a
            className="white-text"
            href="https://www.serpenstech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            serpens technology.
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
