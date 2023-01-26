import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        inline?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TriangleLeftProps = typeof __propDef.props;
export type TriangleLeftEvents = typeof __propDef.events;
export type TriangleLeftSlots = typeof __propDef.slots;
export default class TriangleLeft extends SvelteComponentTyped<TriangleLeftProps, TriangleLeftEvents, TriangleLeftSlots> {
}
export {};
