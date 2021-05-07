import React from "react";
import PropTypes from "prop-types";

export default function hr({ horizontal = false, ...props }) {
  return <hr horizontal={horizontal} {...props} />;
}

MyComponent.propTypes = {
  horizontal: PropTypes.bool,
};
