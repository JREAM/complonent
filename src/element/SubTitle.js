import React from "react";
import propTypes from "prop-types";

const Subtitle = props => {
  const { children } = props;
  return <p class="subtitle">{children}</p>;
};

Subtitle.propTypes = {
  children: propTypes.func
};

export default Subtitle;
