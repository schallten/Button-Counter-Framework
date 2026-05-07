import { resetHooks } from "./hooks";
import { createElement } from "./render";
import type { VNode  } from "./h";

// global state
let rootComponent: (()=> VNode) | undefined;
let rootContainer: HTMLElement | undefined;

// initalize and render application for the first time
export function renderRoot(
    component: ()=> VNode,
    container: HTMLElement
): void {
    // assigns to moduleo level globals like setting static vairbales
    rootComponent = component;
    rootContainer = container;
    rerender();
}

// re-renders the application while preserving focus and selection state
export function rerender(): void {
    // focus selection state preservation
    // type narrowing
    // it says it either is pointer or null
    const activeElement: Element | null = document.activeElement;

    // we check if activeeelemnt exist and has an id properpty
    // not all elements have id but htmlelement does 
    const activeElementId: string | null = 
    activeElement && "id" in activeElement ? (activeElement as HTMLElement).id : null;

    // selection properties only exist on htmlinput element / html text area elemetn
    const selectionStart: number | null = 
    activeElement && "selectionStart" in activeElement ? (activeElement as HTMLInputElement | HTMLTextAreaElement).selectionStart:null;

    const selectionEnd: number | null = activeElement &&
    "selectionEnd" in activeElement ? (activeElement as HTMLInputElement | HTMLTextAreaElement).selectionEnd:null;

    // reset hook counter before component runs ( like resettingand itertion)
    resetHooks();

    // component rendering
    // call stored component function to get VNode tree
    /// renderRoot() is always called first , like derefencing a pointer we know is valid
    const vnode: VNode = rootComponent!();
    // converto virtual dom to real dom
    const dom: Node = createElement(vnode);
    // clear container and mount new DOM ( like swappnig pointers)
    // '!' assetsr rootContainer is defined 
    rootContainer!.innerHTML = "";
    rootContainer!.appendChild(dom);

    // focus restoration

    // type guard to check if we had a focused element iwth an ID
    if (activeElementId!==null){
        // documents.getElementById returns HTMLElement | null
        const element: HTMLElement | null = document.getElementById(activeElementId);

        // null check before dereferincing
        if (element!==null){
            element.focus();

            // restore selection
            if (selectionStart!==null &&
                selectionEnd !== null &&
                "setSelectionRange" in element){
                    (element as HTMLInputElement |HTMLTextAreaElement).setSelectionRange(selectionStart,selectionEnd);
                }
            }
        }
    }

