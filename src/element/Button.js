import React from "react";
import propTypes from "prop-types";

const Button = props => {
  const { children } = props;
  return (
    <>
      <div class="button">{children}</div>
    </>
  );
};

Button.propTypes = {
  children: propTypes.func
};

export default Button;
