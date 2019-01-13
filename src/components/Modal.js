import React from "react";
import propTypes from "prop-types";

const Modal = props => {
  const { children } = props;
  return (
    <>
      <div class="modal">{children}</div>
    </>
  );
};

Modal.propTypes = {
  children: propTypes.func
};

export default Modal;
