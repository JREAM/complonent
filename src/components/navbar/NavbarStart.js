import React from "react";
import propTypes from "prop-types";

const NavbarStart = props => {
  const { children } = props;
  return <div class="navbar-start">{children}</div>;
};

NavbarStart.propTypes = {
  children: propTypes.func
};

export default NavbarStart;
