import React from "react";
import PropTypes from "prop-types";

export default function hr({ vertical = false, ...props }) {
  return <hr vertical={vertical} {...props} />;
}

hr.propTypes = {
  vertical: PropTypes.bool,
};
