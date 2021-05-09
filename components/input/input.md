A very simple input jsx element.

### Basic input

```jsx
import Input from "./input";

<Input />;
```

### onChange input

```jsx
import Input from "./input";

<Input onChange={(event, value) => value.toUpperCase()} />;
```

### input group: append and prepend

```jsx
import Input from "./input";

<Input
  type="number"
  prepend={
    <div
      style={{
        height: "100%",
        background: "#c0c0c0",
        paddingLeft: 4,
        paddingRight: 4,
      }}
    >
      255
    </div>
  }
/>;
```

```jsx
import Input from "./input";

<Input append="@larven.co.tz" />;
```
