import React from "react";
import propTypes from "prop-types";

const NavbarLink = props => {
  const { children } = props;
  return <div class="navbar-link">{children}</div>;
};

NavbarLink.propTypes = {
  children: propTypes.func
};

export default NavbarLink;
