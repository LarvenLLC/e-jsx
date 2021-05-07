import React from "react";
import PropTypes from "prop-types";

export default function Input({ onChange, ...props }) {
  const styles = {
    vertical: {
      display: "inline-block",
      marginBlock: "auto",
      marginInline: "0.5em",
      height: 50,
    },
  };
  return (
    <input
      {...props}
      onChange={(event) => onChange(event, event.target.value)}
    />
  );
}

Input.propTypes = {
  vertical: PropTypes.bool,
};
