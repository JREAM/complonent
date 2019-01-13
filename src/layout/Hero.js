import React from "react";
import propTypes from "prop-types";

const Hero = props => {
  const { children } = props;
  return (
    <>
      <div class="Hero">{children}</div>
    </>
  );
};

Hero.propTypes = {
  children: propTypes.func
};

export default Hero;
