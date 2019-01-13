import React from "react";
import propTypes from "prop-types";

const Box = props => {
  const { children } = props;
  return (
    <>
      <div class="box">{children}</div>
    </>
  );
};

Box.propTypes = {
  children: propTypes.func
};

export default Box;
