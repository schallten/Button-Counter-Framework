import { resetHooks } from "./hooks.js";
import { createElement } from "./render.js";

let rootComponent;
let rootContainer;

/**
 * Initializes and renders the application for the first time.
 * @param {Function} component - The root functional component.
 * @param {HTMLElement} container - The DOM node where the app will be mounted.
 */
export function renderRoot(component, container) {
    rootComponent = component;
    rootContainer = container;
    rerender();
}

export function rerender() {
    // Capture state of currently focused element
    const activeElementId = document.activeElement ? document.activeElement.id : null;
    const selectionStart = document.activeElement ? document.activeElement.selectionStart : null;
    const selectionEnd = document.activeElement ? document.activeElement.selectionEnd : null;

    resetHooks();

    // Call the component to get the current VNode tree
    const vnode = rootComponent();
    const dom = createElement(vnode);

    // Clear the container and swap in the new DOM structure
    rootContainer.innerHTML = "";
    rootContainer.appendChild(dom);

    // Restore focus if an ID was present
    if (activeElementId) {
        const element = document.getElementById(activeElementId);
        if (element) {
            element.focus();
            // Restore selection/cursor position for input elements
            if (selectionStart !== null && selectionEnd !== null) {
                element.setSelectionRange(selectionStart, selectionEnd);
            }
        }
    }
}
