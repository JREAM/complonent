import React from "react";
import propTypes from "prop-types";

const File = props => {
  const { name } = props;
  return <input type="file" name={name} class="file" />;
};

File.propTypes = {
  name: propTypes.string
};

export default File;
