# Button Counter Framework

A minimal, educational React-like framework with hooks and VNodes. Understand how modern UI libraries work under the hood.

[Live Demo](https://schallten.github.io/Button-Counter-Framework/)

---

## Quick Start

```bash
git clone https://github.com/schallten/Button-Counter-Framework.git
cd Button-Counter-Framework
npm install
npm run dev
```

Open http://localhost:5173

---

## Use via CDN

```javascript
import { h, useState, renderRoot } from "https://esm.sh/gh/schallten/Button-Counter-Framework/core/index.js";
```

---

## API

### `h(tag|Component, props, ...children)`
Creates a Virtual DOM Node. Supports standard HTML tags or functional components.
```javascript
h("div", { class: "container" }, h("h1", {}, "Hello"))
h(MyComponent, { name: "World" })
```

### `useState(initial)`
State management hook. Returns current value and an updater function. Updater supports functional updates.
```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(prev => prev + 1); // Functional update supported
```

### `renderRoot(Component, container)`
Mounts the root component to the DOM and starts the render loop.

---

## Key Features

- **Functional Components**: Build UI using pure functions.
- **Hooks**: Persist state across re-renders with `useState`.
- **Conditional Rendering**: Easily show/hide elements.
- **Zero Dependencies**: Core logic in ~100 lines of code.

---

## Examples

- **Counter**: [main.js](main.js)
- **/examples/todo/** - Todo list with array state
- **/examples/calculator/** - Calculator logic
- **/examples/timer/** - `setInterval` with state updates