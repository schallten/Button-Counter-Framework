import { rerender } from "./app";
// global state 
// in c++ you would write static std::vector<HookState> hooks;
// no explicit type needed here because TS infers any[] from the initialization, but adding it for clarity and error catching

let hooks: any[] = [];
let index: number = 0;

// hooks to manage functional component state
// c++ equivalent : a template function that returns a pair of values
// like @returns A tuple [state,setState]
// in cpp : std::pair<T,std::function<void(T)>>
export function useState(initial:any):[any, (value:any)=> void]{
    // capture current index in closure
    const i: number = index;

    // initialize state if first render
    if(hooks[i] === undefined){
        hooks[i] = initial;
    }
    // updates state and triggers a full app re-render
    // cpp equivalne would be a std::function that captures 'i' and updates hooks[i] before callingrerender()
    function setState(value:any):void {
        // type narrowing : type of check 
        if (typeof value == "function"){
            // value is narrowed to function here 
            // we calll it with current state
            hooks[i] = value(hooks[i]);
        }else{
            hooks[i] = value;
        }
        rerender();
    
    }
    index++;
    // return tuple typed as [any,(value:any)=>void]
    return [hooks[i], setState];
}

// reset hook index before each render
export function resetHooks():void {
    index = 0;
}
