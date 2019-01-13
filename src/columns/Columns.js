import React from "react";
import propTypes from "prop-types";

const Columns = props => {
  const { children } = props;
  return (
    <>
      <div class="columns">{children}</div>
    </>
  );
};

Columns.propTypes = {
  children: propTypes.func
};

export default Columns;
