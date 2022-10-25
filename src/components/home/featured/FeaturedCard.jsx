import React from "react";
import { featured } from "../../../assets/data/Data";

const FeaturedCard = () => {
  return (
    <>
      <div className="content grid4 mtop">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h6>{items.name}</h6>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
