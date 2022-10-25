import React, { useEffect } from "react";
import Back from "../../components/Back/Back";
import Heading from "../../components/common/Heading/Heading";
import AbtImg from "../../assets/images/abt.jpg";
import AbtImg1 from "../../assets/images/abt1.jpeg";
import AbtImg2 from "../../assets/images/abt2.jpeg";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" />

        <div
          style={{
            marginTop: 50,
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col l7">
              <div>
                <div>
                  <p>
                    SHANKAR REALESTATE is a flourishing name in the Real Estate
                    Industry in Bangalore City for more than 15 years. We are
                    involved in building, buying, selling, and rental of
                    residential as well as commercial properties. We have been
                    long associated with well known builders and developers in
                    Bangalore and have been successful at promoting their
                    projects and settling the deals with them. We are the answer
                    to your search for perfect real estate solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="col l5">
              <div data-aos="zoom-in-down">
                <img
                  style={{
                    borderRadius: 10,
                  }}
                  src={AbtImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col l12">
              <div
                style={{
                  marginTop: 10,
                }}
              >
                <p>
                  Established in the year 1997 in Bangalore as a small business
                  concern, we have grown manifold since our inception. We had
                  met with stupendous success at the very onset of our venture
                  that can be credited to our industrious team headed by Mr.
                  Devaraju G.C, whose strategies have catapulted us into the
                  topmost real estate firm in no time
                </p>
                <p>
                  At Shankar Realestate, the emphasis is on customer
                  satisfaction, i.e. an understanding regarding the customer’s
                  expectation and awareness of our responsibility in satisfying
                  our customers. Satisfying customers since 1997, we are
                  competent enough to meet customer requirements in terms of
                  property search with personal attention to each and every one
                  of our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <div>
                <img
                  style={{
                    borderRadius: 10,
                  }}
                  src={AbtImg1}
                  alt=""
                />
              </div>
            </div>
            <div className="col l6 s12">
              <div>
                <img
                  style={{
                    borderRadius: 10,
                  }}
                  src={AbtImg2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col l12">
              <div>
                <h4>Our Mission</h4>
                <p>
                  Delivering the dream of Plot & home ownership everywhere. Our
                  main at Shankar real-estate Companies have this same goal,
                  because owning real estate provides security, safety and
                  opportunity for individuals.
                </p>
                <p>
                  Our customer centric approach we build helps real estate more
                  convincing & become more efficient at their job and Satisfy
                  customers to deliver on that mission. Our Expertise prepares
                  customer to be even better by utilizing exceptional techniques
                  and systems, and the Shankar Real-estate constantly help
                  families find and sell homes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col l12">
              <div>
                <h4>Our Vision.</h4>
                <p>Win, Make, Give, and Do Good.</p>
                <p>
                  We want to win at what we do, and we do all we can to help our
                  customers, agents and employees build wealth. We love to work
                  with people who are passionate about working hard and also
                  giving back to their communities in a big way
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col l12">
              <div>
                <h4>Our Values.</h4>

                <p>
                  . Our values are what everyone who works at Ben Kinney
                  Companies strives for each day, and they are applicable to any
                  companies we work with. These values are also the metric we
                  use to decide to invest or get in business with others. We
                  believe our team’s success is determined by our ability to
                  maintain our HEALTH, which is defined by our core values:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
