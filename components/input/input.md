A very simple input jsx element.

### Basic input

```jsx
import Input from "./input";

<Input />;
```

### onChange input

```jsx
import Input from "./input";

<Input onChange={(event) => onChange(event, event.target.value)} />;
```
