import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenuFunc } = useGlobalContext();
  return (
    <>
      <div className="hero" onMouseOver={closeSubmenuFunc}>
        <div className="inner-hero">
          <h1>
            Payments <br /> infrastructure <br /> for the internet
          </h1>

          <p>
            Millions of companies of all sizes—from startups to <br /> Fortune
            500s—use Stripe’s software and APIs to accept payments, <br /> send
            payouts, and manage their businesses online. <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
