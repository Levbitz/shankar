import React, { useEffect } from "react";
import Heading from "../../common/Heading/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="featured background">
        <div data-aos="fade-up" data-aos-duration="5000" className="container">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Type of Property."
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
