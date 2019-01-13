import React from "react";
import propTypes from "prop-types";

const Notification = props => {
  const { children } = props;
  return <div class="notification">{children}</div>;
};

Notification.propTypes = {
  children: propTypes.func
};

export default Notification;
