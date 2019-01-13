import React from "react";
import propTypes from "prop-types";

const NavbarItem = props => {
  const { children } = props;
  return <div class="navbar-item">{children}</div>;
};

NavbarItem.propTypes = {
  children: propTypes.func
};

export default NavbarItem;
