import React from "react";
import propTypes from "prop-types";

const Footer = props => {
  const { children } = props;
  return (
    <>
      <div class="Footer">{children}</div>
    </>
  );
};

Footer.propTypes = {
  children: propTypes.func
};

export default Footer;
