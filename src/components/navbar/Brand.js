import React from "react";
import propTypes from "prop-types";

const Navbar = props => {
  const { children } = props;
  return <div class="navbar-brand">{children}</div>;
};

Navbar.propTypes = {
  children: propTypes.func
};

export default Navbar;
