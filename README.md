# Button Counter Framework

A minimal, document-driven React clone (hooks era) designed for deep understanding of the global render loop, VNodes, and state management.

[View on GitHub](https://github.com/schallten/Button-Counter-Framework) | [Live Demo & Tutorial](https://schallten.github.io/Button-Counter-Framework/)

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/schallten/Button-Counter-Framework.git
cd Button-Counter-Framework

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking

---

## Focus Preservation

Unlike most "nuclear" rerender frameworks, Button Counter Framework includes a **Focus & Selection Tracking System**. This allows you to build complex forms (like Todo lists) without losing input focus on every keystroke, while still keeping the framework's core under 1KB.

---

## Core Philosophy

This framework is built on a "Nuclear Rerender" model: when state changes, the entire application is re-evaluated and the DOM is rebuilt from scratch.

- **Function Components Only**: Pure logic, declarative UI.
- **Global Render Loop**: Deterministic UI updates.
- **Hook State Store**: Array-based state tracking.
- **Declarative UI**: Expressed via a custom `h()` function.

---

## API Reference

### 1. `h(type, props, ...children)`

- **`type`**: String (tag name) or a Component function.
- **`props`**: Attributes and event listeners (`onclick`, `oninput`, etc.).
- **`children`**: Nest as many elements as you need.

### 2. `useState(initialValue)`

- Returns: `[state, setState]`.
- Calling `setState` triggers a full application rerender.

### 3. `renderRoot(App, container)`

- Mounts your application to the real DOM.

---

## Installation (CDN)

You can use this framework directly in your browser without any build tools:

```javascript
import { h, useState, renderRoot } from "https://cdn.jsdelivr.net/gh/schallten/Button-Counter-Framework@main/core/index.ts";
```