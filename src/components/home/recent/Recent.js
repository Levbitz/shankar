import React from "react";
import Heading from "../../common/Heading/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className="recent_wrap">
        <div className="">
          <Heading
            title="Recent Property Listed"
            subtitle="Over the few decades, Bangalore has emerged as an IT hub of India, thus attracting large number of industries to set up commercial real estate in Karnataka. Sudden upsurge in commercial real estate has also given a boost to the number of immigrants looking for affordable residential property"
          />
          <div className="row">
            <RecentCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
