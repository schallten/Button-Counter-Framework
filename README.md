# Button Counter Framework

A minimal React-like framework for learning how modern UI works.

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

- `h(tag, props, ...children)` - Create elements
- `useState(initial)` - State: returns `[value, setValue]`
- `renderRoot(Component, container)` - Mount app

---

## Examples

- Counter demo on homepage
- `/examples/todo/` - Todo list
- `/examples/calculator/` - Calculator
- `/examples/timer/` - Timer