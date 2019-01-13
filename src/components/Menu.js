import React from "react";
import propTypes from "prop-types";

const Menu = props => {
  const { children } = props;
  return (
    <>
      <div class="menu">{children}</div>
    </>
  );
};

Menu.propTypes = {
  children: propTypes.func
};

export default Menu;
