import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const styles = styled.hr`
  display: "inline-block",
  marginBlock: auto,
  marginInline: 0.5em,
  height: 50px,
`;

export default function hr({ vertical = false, ...props }) {
  // const styles = {
  //   vertical: {
  //     display: "inline-block",
  //     marginBlockStart: "auto",
  //     marginBlockEnd: "auto",
  //     marginInline: "0.5em",
  //     height: 50,
  //   },
  // };
  return <hr {...props} />;
}

hr.propTypes = {
  vertical: PropTypes.bool,
};
