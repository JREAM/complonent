import React from "react";
import propTypes from "prop-types";

const Section = props => {
  const { children } = props;
  return (
    <>
      <div class="Section">{children}</div>
    </>
  );
};

Section.propTypes = {
  children: propTypes.func
};

export default Section;
