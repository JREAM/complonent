import React from "react";
import propTypes from "prop-types";

const NavbarEnd = props => {
  const { children } = props;
  return <div class="navbar-end">{children}</div>;
};

NavbarEnd.propTypes = {
  children: propTypes.func
};

export default NavbarEnd;
