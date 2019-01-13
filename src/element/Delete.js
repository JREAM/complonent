import React from "react";
import propTypes from "prop-types";

const Delete = props => {
  const { children } = props;
  return (
    <>
      <div class="delete">{children}</div>
    </>
  );
};

Delete.propTypes = {
  children: propTypes.func
};

export default Delete;
