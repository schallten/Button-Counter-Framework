import { h, useState, renderRoot } from "./core/index.js";

function Nav({ activeTab, setActiveTab }) {
    return h("nav", { style: "display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 1rem;" },
        h("button", {
            onclick: () => setActiveTab("home"),
            style: `background: none; border: none; color: ${activeTab === "home" ? "var(--accent)" : "var(--text-muted)"}; font-weight: 600; cursor: pointer;`
        }, "Home"),
        h("button", {
            onclick: () => setActiveTab("tutorial"),
            style: `background: none; border: none; color: ${activeTab === "tutorial" ? "var(--accent)" : "var(--text-muted)"}; font-weight: 600; cursor: pointer;`
        }, "The Ultimate Guide")
    );
}

function Home() {
    const [count, setCount] = useState(0);
    return h("div", {},
        h("section", { class: "demo" },
            h("h2", { style: "text-align: center; margin-bottom: 2rem;" }, "Interactive Demo"),
            h("div", { class: "card" },
                h("span", { class: "count" }, count),
                h("button", { onclick: () => setCount(count + 1) }, "Increment Count")
            )
        ),
        h("section", { class: "docs" },
            h("h2", {}, "What is this?"),
            h("p", {}, "Button Counter Framework is a simplified version of React. It's built for those who want to understand how modern websites actually work under the hood without the confusion of complex tools.")
        )
    );
}

function Tutorial() {
    return h("section", { class: "docs tutorial-content" },

        // INTRO
        h("h1", { style: "font-size: 2.5rem; margin-bottom: 1rem;" }, "Build Your First Interactive Website"),
        h("p", { style: "font-size: 1.2rem; margin-bottom: 2rem;" },
            "This guide will take you from zero to building real interactive UI using a tiny React-like system."
        ),

        // STEP 1
        h("div", { class: "step" },
            h("h2", {}, "1. Everything is a Function (h)"),
            h("p", {},
                "Instead of writing HTML, we use a function called ",
                h("code", {}, "h()"),
                " to create elements."
            ),
            h("pre", { class: "code-block" }, `h("h1", {}, "Hello World")`),
            h("p", {}, "This creates: <h1>Hello World</h1>"),
            h("pre", { class: "code-block" }, `h("button", { class: "btn" }, "Click Me")`),
            h("p", { class: "note" },
                "Think of it like: h(type, props, children)"
            )
        ),

        // STEP 2
        h("div", { class: "step" },
            h("h2", {}, "2. Nesting Elements"),
            h("p", {}, "Elements can contain other elements."),
            h("pre", { class: "code-block" }, `h("div", {},
  h("h1", {}, "Title"),
  h("p", {}, "This is a paragraph")
)`),
            h("p", {}, "This builds a full structure like HTML.")
        ),

        // STEP 3
        h("div", { class: "step" },
            h("h2", {}, "3. Components (Reusable UI)"),
            h("p", {}, "A component is just a function."),
            h("pre", { class: "code-block" }, `function Card() {
  return h("div", { class: "card" },
    h("h2", {}, "Hello"),
    h("p", {}, "This is reusable")
  );
}`),
            h("p", {}, "Use it like this:"),
            h("pre", { class: "code-block" }, `h(Card)`),
            h("p", { class: "note" },
                "Components let you reuse UI like Lego blocks."
            )
        ),

        // STEP 4
        h("div", { class: "step" },
            h("h2", {}, "4. Adding Memory (useState)"),
            h("p", {},
                "To make your app dynamic, we use ",
                h("code", {}, "useState")
            ),
            h("pre", { class: "code-block" }, `const [count, setCount] = useState(0);`),
            h("ul", {},
                h("li", {}, "count → current value"),
                h("li", {}, "setCount → updates value")
            )
        ),

        // STEP 5
        h("div", { class: "step" },
            h("h2", {}, "5. Making Things Interactive"),
            h("p", {}, "Use events like onclick."),
            h("pre", { class: "code-block" }, `h("button", {
  onclick: () => setCount(count + 1)
}, "Click")`),
            h("p", {}, "When clicked → state updates → UI re-renders automatically.")
        ),

        // STEP 6
        h("div", { class: "step" },
            h("h2", {}, "6. Displaying State"),
            h("pre", { class: "code-block" }, `h("p", {}, "Count: " + count)`),
            h("p", {}, "UI always reflects the latest state.")
        ),

        // STEP 7
        h("div", { class: "step" },
            h("h2", {}, "7. Multiple States"),
            h("pre", { class: "code-block" }, `const [name, setName] = useState("Guest");
const [score, setScore] = useState(0);`),
            h("p", {}, "You can store multiple pieces of data.")
        ),

        // STEP 8
        h("div", { class: "step" },
            h("h2", {}, "8. Conditional Rendering"),
            h("pre", { class: "code-block" }, `count > 5
  ? h("p", {}, "High score!")
  : h("p", {}, "Keep going!")`),
            h("p", {}, "Render different UI based on state.")
        ),

        // STEP 9
        h("div", { class: "step" },
            h("h2", {}, "9. Props (Passing Data)"),
            h("pre", { class: "code-block" }, `function Greeting({ name }) {
  return h("h1", {}, "Hello " + name);
}

h(Greeting, { name: "Alex" })`),
            h("p", {}, "Props let components receive data.")
        ),

        // STEP 10
        h("div", { class: "step" },
            h("h2", {}, "10. Rendering the App"),
            h("pre", { class: "code-block" }, `renderRoot(App, document.getElementById("app"));`),
            h("p", {}, "This mounts your app to the page.")
        ),

        // FINAL PROJECT
        h("div", { class: "card final-example" },
            h("h2", {}, "Final Project: Counter App"),
            h("pre", { class: "code-block" }, `function App() {
  const [count, setCount] = useState(0);

  return h("div", {},
    h("h1", {}, "Counter: " + count),

    h("button", {
      onclick: () => setCount(count + 1)
    }, "+"),

    h("button", {
      onclick: () => setCount(count - 1)
    }, "-")
  );
}`),
        ),

        // CHALLENGES
        h("div", { class: "step" },
            h("h2", {}, "Challenges 🚀"),
            h("ul", {},
                h("li", {}, "Make a like button ❤️"),
                h("li", {}, "Build a name input field"),
                h("li", {}, "Create a todo list"),
                h("li", {}, "Make a dark mode toggle")
            )
        ),

        // OUTRO
        h("footer", { style: "margin-top: 3rem; text-align: center;" },
            h("h3", {}, "You now understand the core ideas 🎉"),
            h("p", {}, "Next step: build something small and break it.")
        )
    );
}

function App() {
    const [activeTab, setActiveTab] = useState("home");
    const [theme, setTheme] = useState("dark");

    // Apply the theme class to the <html> element for consistent scaling/variables
    document.documentElement.className = theme;

    return h(
        "div",
        { class: `container ${theme}` },
        h("header", { style: "display: flex; justify-content: space-between; align-items: center;" },
            h("div", {},
                h("h1", {}, "Button Counter Framework"),
                h("p", {}, "Educational project by schallten")
            ),
            h("button", {
                onclick: () => setTheme(theme === "dark" ? "light" : "dark"),
                style: "background: var(--bg); border: 1px solid var(--border); color: var(--text); padding: 0.5rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease;"
            }, theme === "dark" ? "☀️" : "🌙")
        ),

        h(Nav, { activeTab, setActiveTab }),

        activeTab === "home" ? h(Home) : h(Tutorial),

        h("footer", { class: "main-footer" },
            h("p", {}, "Educational project | "),
            h("a", { href: "https://github.com/schallten/Button-Counter-Framework", target: "_blank" }, "View on GitHub")
        )
    );
}

renderRoot(App, document.getElementById("app"));
