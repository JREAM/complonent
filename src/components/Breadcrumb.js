import React from "react";
import propTypes from "prop-types";

const Breadcrumb = props => {
  const { children } = props;
  return (
    <>
      <div class="breadcrumb">{children}</div>
    </>
  );
};

Breadcrumb.propTypes = {
  children: propTypes.func
};

export default Breadcrumb;
