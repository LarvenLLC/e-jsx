import React from "react";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

export default function Input({ onChange, ...props }: Props) {
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
