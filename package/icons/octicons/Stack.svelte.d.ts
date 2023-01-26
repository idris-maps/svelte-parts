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
export type StackProps = typeof __propDef.props;
export type StackEvents = typeof __propDef.events;
export type StackSlots = typeof __propDef.slots;
export default class Stack extends SvelteComponentTyped<StackProps, StackEvents, StackSlots> {
}
export {};
