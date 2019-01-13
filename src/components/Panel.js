import React from "react";
import propTypes from "prop-types";

const Panel = props => {
  const { children } = props;
  return (
    <>
      <div class="panel">{children}</div>
    </>
  );
};

Panel.propTypes = {
  children: propTypes.func
};

export default Panel;
