import React from "react";
import propTypes from "prop-types";

const Dropdown = props => {
  const { children } = props;
  return (
    <>
      <div class="dropdown">{children}</div>
    </>
  );
};

Dropdown.propTypes = {
  children: propTypes.func
};

export default Dropdown;
