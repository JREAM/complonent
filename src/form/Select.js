import React from "react";
import propTypes from "prop-types";

const Option = options => {
  return (options.map = (display, key) => (
    <option key="{key.toString()}" value="key">
      {display}
    </option>
  ));
};

const Select = props => {
  const { options } = props;
  return (
    <>
      <select class="select">{Option(options)}</select>
    </>
  );
};

Select.propTypes = {
  options: propTypes.object
};

export default Select;
