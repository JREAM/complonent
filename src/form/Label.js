import React from "react";
import propTypes from "prop-types";

const Label = props => {
  const { children } = props;
  return (
    <>
      <label>{children}</label>
    </>
  );
};

Label.propTypes = {
  children: propTypes.func
};

export default Label;
