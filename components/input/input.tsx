import * as React from "react";

type Props = {
  format: string;
  buttonLeft: string;
  buttonRight: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

export default function Input({ format, onChange, ...props }: Props) {
  return (
    <input
      {...props}
      onChange={(event) => onChange(event, event.target.value)}
    />
  );
}
