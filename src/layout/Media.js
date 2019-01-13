import React from "react";
import propTypes from "prop-types";

const Media = props => {
  const { children } = props;
  return (
    <>
      <div class="Media">{children}</div>
    </>
  );
};

Media.propTypes = {
  children: propTypes.func
};

export default Media;
