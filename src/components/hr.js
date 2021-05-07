import React from "react";

export default function hr({ horizontal = false, ...props }) {
  return <hr horizontal={horizontal} {...props} />;
}
