import React from "react";
import propTypes from "prop-types";

const ProgressBar = props => {
  const { children } = props;
  return <progress class="progress">{children}</progress>;
};

ProgressBar.propTypes = {
  children: propTypes.func
};

export default ProgressBar;
