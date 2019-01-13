import React from "react";
import propTypes from "prop-types";

const Radio = props => {
  const { children } = props;
  return (
    <>
      <form class="form">{children}</form>
    </>
  );
};

Radio.propTypes = {
  children: propTypes.func
};

export default Radio;
