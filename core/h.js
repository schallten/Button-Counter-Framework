/**
 * Creates a Virtual DOM Node (VNode).
 * @param {string|Function} type - The element tag name or a functional component.
 * @param {Object} props - The attributes and event listeners.
 * @param {...(Object|string|number)} children - Child elements or text.
 * @returns {Object} The virtual node representation.
 */
export function h(type, props, ...children) {
    return {
        type,
        props: props || {},
        // Flatten nested arrays and ensure numbers are converted to strings for rendering
        children: children.flat().map(c =>
            typeof c === "number" ? String(c) : c
        )
    }
}
