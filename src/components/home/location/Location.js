import React, { useEffect } from "react";
import Heading from "../../common/Heading/Heading";
import { location } from "../../../assets/data/Data";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Location = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="location ">
        <div>
          <Heading
            title="Property In  Karnataka"
            subtitle="The tremendous growth of Karnataka with numerous marketing and manufacturing industries has made it a perfect destination for commercial activities. "
          />

          <div className="row">
            <div className="">
              {location.map((item, index) => (
                <div className="col l4 s12">
                  <div data-aos="flip-left" className="box" key={index}>
                    <img src={item.cover} alt="" />
                    <div className="overlay responsive-img">
                      <h5>{item.name}</h5>
                      <p>
                        <label>{item.Villas}</label>
                        <label>{item.Offices}</label>
                        <label>{item.Apartments}</label>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
