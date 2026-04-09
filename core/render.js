import { h } from "./h.js";

/**
 * Transforms a VNode into a real DOM element.
 * @param {Object|string|number} vnode - The virtual node to render.
 * @returns {Node} A DOM node.
 */
export function createElement(vnode) {
    // Handle falsy vnodes (e.g., from conditional rendering)
    if (vnode === null || vnode === false || vnode === undefined) {
        return document.createTextNode("");
    }

    // Handle text nodes
    if (typeof vnode === "string") {
        return document.createTextNode(vnode);
    }

    // Handle functional components by executing them
    if (typeof vnode.type === "function") {
        return createElement(vnode.type(vnode.props));
    }

    // Create the actual HTML element
    const el = document.createElement(vnode.type);

    // Apply properties and event listeners
    for (let key in vnode.props) {
        if (key.startsWith("on")) {
            // Simplified event binding (e.g., onclick -> el.onclick)
            el[key.toLowerCase()] = vnode.props[key];
        } else {
            // Standard HTML attributes
            el.setAttribute(key, vnode.props[key]);
        }
    }

    // Recursively render and append child nodes
    vnode.children.forEach(child => {
        el.appendChild(createElement(child));
    });

    return el;
}
