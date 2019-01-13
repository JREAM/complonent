import React from "react";
import propTypes from "prop-types";

const Tabs = props => {
  const { children } = props;
  return (
    <>
      <div class="tabs">{children}</div>
    </>
  );
};

Tabs.propTypes = {
  children: propTypes.func
};

export default Tabs;
