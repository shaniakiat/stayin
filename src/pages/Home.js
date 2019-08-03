import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxurious rooms" subtitle="deluxe room starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
