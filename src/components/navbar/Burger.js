import React from "react";
import propTypes from "prop-types";

const Burger = props => {
  const { dataTarget } = props;
  return (
    <span
      aria-expanded="false"
      aria-label="menu"
      class="navbar-burger burger"
      data-target={dataTarget}
      role="button"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  );
};

Burger.propTypes = {
  children: propTypes.func
};

export default Burger;
