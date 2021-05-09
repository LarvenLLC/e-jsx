import * as React from "react";

type Props = {
  append: string;
  format: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  prepend: string;
};

export default function Input({
  append,
  format,
  onChange,
  prepend,
  ...props
}: Props) {
  return (
    <InputContainer append={append} prepend={prepend}>
      <input
        {...props}
        onChange={(event) => onChange(event, event.target.value)}
      />
    </InputContainer>
  );
}

type ContainerProps = {
  append: any;
  appendStyle: object;
  children: JSX.Element;
  prepend: any;
};

function InputContainer({
  append,
  appendStyle,
  prepend,
  children,
}: ContainerProps) {
  function Append() {
    if (append) {
      return <div style={{ ...styles.append, ...appendStyle }}>{append}</div>;
    }
    return null;
  }

  function Prepend() {
    if (prepend) {
      return <div style={{ ...styles.append, ...appendStyle }}>{prepend}</div>;
    }
    return null;
  }

  if (append || prepend) {
    return (
      <div style={styles.group}>
        <Prepend />
        {children}
        <Append />
      </div>
    );
  }
  return children;
}

const styles = {
  group: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    width: "100%",
  },
  append: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
};
