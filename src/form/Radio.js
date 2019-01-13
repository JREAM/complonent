import React from "react";
import propTypes from "prop-types";

const
const Radio = props => {
  const { groupName, selectedName, options, ...rest } = props;
  return (
      {options.map(name, index) => (
        <input
          key="{key.toString()}"
          type="radio"
          name={groupName} // array @TODO
          value=""
          checked={selectedName}
        />
      )}
  );
};

Radio.propTypes = {
  name: propTypes.string,
  selectedName: propTypes.string,
  options: propTypes.object
};

export default Radio;
