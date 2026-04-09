import { h, useState, renderRoot } from "../../core/index.js";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, { text: inputValue, done: false, id: Date.now() }]);
            setInputValue("");
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return h("div", { class: "container" },
        h("header", {},
            h("h1", {}, "Todo List"),
            h("a", { href: "../../index.html", style: "color: var(--accent); font-size: 0.9rem;" }, "← Back to Home")
        ),
        h("div", { class: "card" },
            h("div", { style: "display: flex; margin-bottom: 1rem;" },
                h("input", {
                    id: "todo-input",
                    type: "text",
                    value: inputValue,
                    oninput: (e) => setInputValue(e.target.value),
                    placeholder: "What needs to be done?"
                }),
                h("button", { onclick: addTodo }, "Add")
            ),
            h("ul", { style: "list-style: none; padding: 0;" },
                todos.map(todo => h("li", { class: `todo-item ${todo.done ? "done" : ""}` },
                    h("span", { onclick: () => toggleTodo(todo.id), style: "cursor: pointer; flex-grow: 1;" }, todo.text),
                    h("button", {
                        onclick: () => deleteTodo(todo.id),
                        style: "background: #ff4444; margin-left: 0.5rem; padding: 0.2rem 0.5rem;"
                    }, "×")
                ))
            ),
            todos.length === 0 && h("p", { style: "text-align: center; color: #888;" }, "No tasks yet!")
        )
    );
}

renderRoot(TodoApp, document.getElementById("app"));
