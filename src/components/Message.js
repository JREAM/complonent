import React from "react";
import propTypes from "prop-types";

const Message = props => {
  const { children } = props;
  return (
    <>
      <div class="message">{children}</div>
    </>
  );
};

Message.propTypes = {
  children: propTypes.func
};

export default Message;
