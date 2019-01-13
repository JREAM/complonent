import React from "react";
import propTypes from "prop-types";

const Checkbox = props => {
  const { name, isChecked } = props;
  return <input type="checkbox" name={name} checked={isChecked} />;
};

Checkbox.propTypes = {
  name: propTypes.string,
  isChecked: propTypes.string
};

export default Checkbox;
