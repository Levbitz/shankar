import React, { useEffect } from "react";
import { list } from "../../../assets/data/Data";
import Aos from "aos";
import "aos/dist/aos.css";

const RecentCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {list.map((val, index) => {
        const { cover, category, location, name } = val;
        return (
          <div className="  col l4 s12" key={index}>
            <div
              data-aos="zoom-in"
              style={{
                marginBottom: "30px",
                borderRadius: "10px",
              }}
              className="single_recent_card"
            >
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div
                style={{
                  padding: "10px 10px",
                }}
                className="text"
              >
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart red-text"></i>
                </div>
                <h6>{name}</h6>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecentCard;
