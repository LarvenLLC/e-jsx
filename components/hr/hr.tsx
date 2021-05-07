import * as React from "react";

export type Props = {
  vertical: boolean;
};

export default function HR({ vertical = false, ...props }: Props) {
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
