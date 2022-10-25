import React from "react";
import "./back.css";

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="topbanner_wrap">
        <div className="container">
          <div className="row">
            <div className="col l12">
              <div>
                <span>{name}</span>
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Back;
