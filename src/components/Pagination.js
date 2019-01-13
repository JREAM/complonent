import React from "react";
import propTypes from "prop-types";

const Pagination = props => {
  const { children } = props;
  return (
    <>
      <div class="pagination">{children}</div>
    </>
  );
};

Pagination.propTypes = {
  children: propTypes.func
};

export default Pagination;
