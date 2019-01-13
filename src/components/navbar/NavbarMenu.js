import React from "react";
import propTypes from "prop-types";

const NavbarMenu = props => {
  const { children } = props;
  return <div class="navbar-menu">{children}</div>;
};

NavbarMenu.propTypes = {
  children: propTypes.func
};

export default NavbarMenu;
