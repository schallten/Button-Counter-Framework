import type { VNode, VNodeChild } from "./h";

/**
 * Reconciles and patches a DOM element based on a VNode.
 * @param parent The parent DOM element.
 * @param newNode The new VNode to render.
 * @param oldNode The old VNode to compare against.
 * @param index The index of the child node.
 */
// transforms a VNode into a real DOM element

export function createElement(vnode: VNodeChild): Node {
    if (vnode===null||vnode===undefined){
        return document.createTextNode("") // create empty text node as a placeholder
    }

    // handle text nodes
    // type narrowing
    if (typeof vnode === "string"){
        return document.createTextNode(vnode);
    }
    // handling functional components
    // atp ts knows vnode is VNode ( the remamingi union member )
    // checking if type is a function
    if (typeof vnode.type === "function"){
        // execute the component functio to get its returned vnode
        return createElement(
            (vnode.type as Function)(vnode.props)
        );
    }

    // handle html elements
    // ts now knows vnode.type is string not function
    const el : HTMLElement = document.createElement(vnode.type);
    console.log("Creating element:", vnode.type, "props:", vnode.props);
    // apply properties and event listeners
    for (let key in vnode.props){
        console.log("  Setting prop:", key, "=", vnode.props[key]);
        // check if pprroperty is an event handler
        if (key.startsWith("on")){
            const eventName = key.slice(2).toLowerCase();
            console.log("  Attaching event:", eventName);
            (el as any)["on" + eventName] = vnode.props[key];
        } else if (key === "value" && (vnode.type === "input" || vnode.type === "textarea")) {
            // set value directly for inputs (not as attribute)
            (el as HTMLInputElement).value = vnode.props[key];
        } else {
            //s tandard html attributes
            el.setAttribute(key,vnode.props[key]);
        }
    }
    // recursively render children
    // ts know vnode.children is VNodeChild[]
    vnode.children.forEach((child: VNodeChild)=>{
        el.appendChild(createElement(child));
    })
    // return the consutrcted element 
    return el;
}