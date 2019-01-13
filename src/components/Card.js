import React from "react";
import propTypes from "prop-types";

const Card = props => {
  const { children } = props;
  return (
    <>
      <div class="card">{children}</div>
    </>
  );
};

Card.propTypes = {
  children: propTypes.func
};

export default Card;
