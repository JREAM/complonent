import React from "react";
import propTypes from "prop-types";

const Textarea = props => {
  const { name, children } = props;
  return (
    <>
      <textarea name={name ? name : ""} class="textarea">
        {children}
      </textarea>
    </>
  );
};

Textarea.propTypes = {
  children: propTypes.func,
  name: propTypes.string
};

export default Textarea;
