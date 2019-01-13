import React from "react";
import propTypes from "prop-types";

const Image = props => {
  const { children } = props;
  return (
    <>
      <div class="image">{children}</div>
    </>
  );
};

Image.propTypes = {
  children: propTypes.func
};

export default Image;
