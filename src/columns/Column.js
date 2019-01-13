import React from "react";
import propTypes from "prop-types";

const Column = props => {
  const { children } = props;
  return (
    <>
      <div class="column">{children}</div>
    </>
  );
};

Column.propTypes = {
  children: propTypes.func
};

export default Column;
