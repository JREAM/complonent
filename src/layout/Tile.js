import React from "react";
import propTypes from "prop-types";

const Tile = props => {
  const { children } = props;
  return (
    <>
      <div class="Tile">{children}</div>
    </>
  );
};

Tile.propTypes = {
  children: propTypes.func
};

export default Tile;
