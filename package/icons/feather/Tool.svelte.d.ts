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
export type ToolProps = typeof __propDef.props;
export type ToolEvents = typeof __propDef.events;
export type ToolSlots = typeof __propDef.slots;
export default class Tool extends SvelteComponentTyped<ToolProps, ToolEvents, ToolSlots> {
}
export {};
