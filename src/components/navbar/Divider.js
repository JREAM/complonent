import React from "react";
import propTypes from "prop-types";

const Divider = () => {
  return <hr class="navbar-divider" />;
};

Divider.propTypes = {
  children: propTypes.func
};

export default Divider;
