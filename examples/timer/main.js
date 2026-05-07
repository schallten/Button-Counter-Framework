import { h, useState, renderRoot } from "../../core/index.js";

let interval = null;

function TimerApp() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        if (isActive) {
            clearInterval(interval);
            setIsActive(false);
        } else {
            setIsActive(true);
            interval = setInterval(() => {
                setTime(t => t + 1);
            }, 1000);
        }
    };

    const reset = () => {
        clearInterval(interval);
        setIsActive(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return h("div", { class: "container" },
        h("header", {},
            h("h1", {}, "Stopwatch"),
            h("a", { href: "../../index.html", style: "color: var(--accent); font-size: 0.9rem;" }, "← Back to Home")
        ),
        h("div", { class: "card" },
            h("div", { class: "timer-display" }, formatTime(time)),
            h("div", { class: "timer-controls" },
                h("button", { 
                    onclick: toggle,
                    style: `background: ${isActive ? "#ffcc00" : "#00cc66"}`
                }, isActive ? "Pause" : "Start"),
                h("button", { 
                    onclick: reset,
                    style: "background: #ff4444"
                }, "Reset")
            )
        )
    );
}

renderRoot(TimerApp, document.getElementById("app"));
