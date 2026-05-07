export type VNodeType = string | Function;
export type VNodeChild = VNode | string | null | undefined;
export type VNodeChildren = VNodeChild[];

export interface VNode {
  type: VNodeType;
  props: Record<string, any>;
  children: VNodeChildren;
}

export function h(
  type: VNodeType,
  props: Record<string, any> | null,
  ...children: (VNodeChild | VNodeChild[])[]
): VNode {
  return {
    type,
    props: props ?? {},
    children: children.flat().map((c): VNodeChild =>
      typeof c === "number" ? String(c) : c
    ),
  };
}