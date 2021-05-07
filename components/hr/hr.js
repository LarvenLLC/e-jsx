import React from "react";
import PropTypes from "prop-types";

export default function hr({ vertical = false, ...props }) {
  const styles = {
    vertical: {
      display: "inline-block",
      marginBlockStart: "auto",
      marginBlockEnd: "auto",
      marginInline: "0.5em",
      height: 50,
    },
  };
  return <hr {...props} style={styles.vertical} />;
}

hr.propTypes = {
  vertical: PropTypes.bool,
};
