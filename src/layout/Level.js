import React from "react";
import propTypes from "prop-types";

const Level = props => {
  const { children } = props;
  return (
    <>
      <div class="Level">{children}</div>
    </>
  );
};

Level.propTypes = {
  children: propTypes.func
};

export default Level;
