import React from "react";
import propTypes from "prop-types";

const Title = props => {
  const { children } = props;
  return <h1 class="title">{children}</h1>;
};

Title.propTypes = {
  children: propTypes.func
};

export default Title;
