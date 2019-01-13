import React from "react";
import propTypes from "prop-types";

const Container = props => {
  const { children } = props;
  return (
    <>
      <div class="Container">{children}</div>
    </>
  );
};

Container.propTypes = {
  children: propTypes.func
};

export default Container;
