import React from "react";
import propTypes from "prop-types";

const DropDown = props => {
  const { children } = props;
  return <div class="navbar-dropdown">{children}</div>;
};

DropDown.propTypes = {
  children: propTypes.func
};

export default DropDown;
