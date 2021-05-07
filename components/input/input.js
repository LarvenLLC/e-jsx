import React from "react";
import PropTypes from "prop-types";

export default function HR({ vertical = false, ...props }) {
  const styles = {
    vertical: {
      display: "inline-block",
      marginBlock: "auto",
      marginInline: "0.5em",
      height: 50,
    },
  };
  return <hr style={vertical ? styles.vertical : {}} {...props} />;
}

HR.propTypes = {
  vertical: PropTypes.bool,
};
