import React from "react";
import propTypes from "prop-types";
import classes from "classnames";

const Navbar = props => {
  const { children, ...rest } = props;
  const classes = classnames({
    navbar: true,
    "is-fixed-top": rest.isFixedTop,
    "is-fixed-bottom": rest.isFixedBottom,
    "is-transparent": rest.isTransparent
  });
  return <nav class={classes}>{children}</nav>;
};

Navbar.propTypes = {
  children: propTypes.func
};

export default Navbar;
