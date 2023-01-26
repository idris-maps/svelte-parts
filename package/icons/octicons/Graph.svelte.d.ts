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
export type GraphProps = typeof __propDef.props;
export type GraphEvents = typeof __propDef.events;
export type GraphSlots = typeof __propDef.slots;
export default class Graph extends SvelteComponentTyped<GraphProps, GraphEvents, GraphSlots> {
}
export {};
