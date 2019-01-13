import React from "react";
import propTypes from "prop-types";

const Table = props => {
  const { children } = props;
  return <table class="table">{children}</table>;
};

Table.propTypes = {
  children: propTypes.func
};

export default Table;
