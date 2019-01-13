import React from "react";
import propTypes from "prop-types";

const Content = props => {
  const { children } = props;
  return (
    <>
      <div class="content">{children}</div>
    </>
  );
};

Content.propTypes = {
  children: propTypes.func
};

export default Content;
