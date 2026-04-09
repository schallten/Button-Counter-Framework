import { rerender } from "./app.js";

// Global hook registry and index
let hooks = [];
let index = 0;

/**
 * Hook to manage functional component state.
 * @param {*} initial - Initial state value.
 * @returns {[*, Function]} A stateful value and a function to update it.
 */
export function useState(initial) {
    const i = index;

    // Persist the state across re-renders
    if (hooks[i] === undefined) {
        hooks[i] = initial;
    }

    /**
     * Updates state and triggers a full app rerender.
     * @param {*} value - New state or function to calculate new state.
     */
    function setState(value) {
        if (typeof value === "function") {
            hooks[i] = value(hooks[i]);
        } else {
            hooks[i] = value;
        }
        rerender();
    }

    index++;
    return [hooks[i], setState];
}

/**
 * Resets the hook index before each render.
 */
export function resetHooks() {
    index = 0;
}
