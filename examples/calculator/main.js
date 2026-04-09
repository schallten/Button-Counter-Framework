import { h, useState, renderRoot } from "../../core/index.js";

function CalculatorApp() {
    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const inputDigit = (digit) => {
        setDisplay(display === "0" ? String(digit) : display + digit);
    };

    const inputOperator = (op) => {
        setPrevValue(parseFloat(display));
        setOperator(op);
        setDisplay("0");
    };

    const calculate = () => {
        const current = parseFloat(display);
        const prev = prevValue;
        let result = 0;

        if (operator === "+") result = prev + current;
        if (operator === "-") result = prev - current;
        if (operator === "*") result = prev * current;
        if (operator === "/") result = prev / current;

        setDisplay(String(result));
        setPrevValue(null);
        setOperator(null);
    };

    const clear = () => {
        setDisplay("0");
        setPrevValue(null);
        setOperator(null);
    };

    return h("div", { class: "container" },
        h("header", {},
            h("h1", {}, "Calculator"),
            h("a", { href: "../../index.html", style: "color: var(--accent); font-size: 0.9rem;" }, "← Back to Home")
        ),
        h("div", { class: "card" },
            h("div", { class: "calc-display" }, display),
            h("div", { class: "calc-grid" },
                h("button", { onclick: clear, class: "span-2" }, "C"),
                h("button", { onclick: () => inputOperator("/") }, "/"),
                h("button", { onclick: () => inputOperator("*") }, "×"),
                [7, 8, 9].map(n => h("button", { onclick: () => inputDigit(n) }, n)),
                h("button", { onclick: () => inputOperator("-") }, "-"),
                [4, 5, 6].map(n => h("button", { onclick: () => inputDigit(n) }, n)),
                h("button", { onclick: () => inputOperator("+") }, "+"),
                [1, 2, 3].map(n => h("button", { onclick: () => inputDigit(n) }, n)),
                h("button", { onclick: calculate, class: "span-2" }, "="),
                h("button", { onclick: () => inputDigit(0) }, "0"),
                h("button", { onclick: () => inputDigit(".") }, ".")
            )
        )
    );
}

renderRoot(CalculatorApp, document.getElementById("app"));
