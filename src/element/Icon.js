import React from "react";
import propTypes from "prop-types";

const Icon = props => {
  const { children } = props;
  return (
    <>
      <div class="icon">{children}</div>
    </>
  );
};

Icon.propTypes = {
  children: propTypes.func
};

export default Icon;
