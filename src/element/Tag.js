import React from "react";
import propTypes from "prop-types";

const Tag = props => {
  const { children } = props;
  return (
    <>
      <div class="tag">{children}</div>
    </>
  );
};

Tag.propTypes = {
  children: propTypes.func
};

export default Tag;
