import React from "react";
import propTypes from "prop-types";

const Input = props => {
  const { placeholder, value } = props;
  return <input type="text" value={value} placeholder={placeholder} />;
};

Input.propTypes = {
  children: propTypes.func,
  type: propTypes.oneOf(["text", "submit"]) // @todo many of these
};

export default Input;
