import React, { useEffect } from "react";
import "./PropertyPage.css";
import Back from "../../components/Back/Back";
import P1 from "../../assets/images/property/p1.jpeg";
import P2 from "../../assets/images/property/p2.jpeg";
import P3 from "../../assets/images/property/p3.jpeg";
import P4 from "../../assets/images/property/p4.jpeg";
import P5 from "../../assets/images/property/p5.jpeg";
import P6 from "../../assets/images/property/p6.jpeg";
import P7 from "../../assets/images/property/p7.jpeg";
import P8 from "../../assets/images/property/p8.jpeg";
import P9 from "../../assets/images/property/p9.jpeg";
import P10 from "../../assets/images/property/p10.jpeg";
import P11 from "../../assets/images/property/p11.jpeg";
import P12 from "../../assets/images/property/p12.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function PropertyPage() {
  return (
    <div>
      <Back name="Property" title="See Some of Our Properties" />
      <div className="container">
        <div className="row">
          <div className="col l12">
            <h5>Property</h5>
          </div>
        </div>

        <div className="row">
          <SingleProperty
            bgImage={P1}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty bgImage={P2} text="Commercial plots in Bangalore" />
          <SingleProperty bgImage={P3} text="Agricultural Plot in Bangalore" />
          <SingleProperty bgImage={P4} text="Commercial plots in Bangalor" />
          <SingleProperty
            bgImage={P5}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P6}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P7}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P8}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P9}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P10}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P11}
            text="Apartment/flat complexes in Bangalore"
          />
          <SingleProperty
            bgImage={P12}
            text="Apartment/flat complexes in Bangalore"
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;

const SingleProperty = ({ bgImage, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="col l4 s12">
        <div className="xyz_levbitz">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
            className="single_property_wrap"
          >
            <div className="row">
              <div className="col l4  s4">
                <div>
                  <span className="featured">Featured</span>
                </div>
              </div>
              <div className="col l4 s4">
                <div>
                  <span className="sales">For sale</span>
                </div>
              </div>
              <div className="col  s4">
                <div>
                  <span className="location">Bangalore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="single_property_content">
            <h6>{text}</h6>

            <p>Price on call</p>
          </div>
        </div>
      </div>
    </>
  );
};
