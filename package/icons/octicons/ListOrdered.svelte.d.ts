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
export type ListOrderedProps = typeof __propDef.props;
export type ListOrderedEvents = typeof __propDef.events;
export type ListOrderedSlots = typeof __propDef.slots;
export default class ListOrdered extends SvelteComponentTyped<ListOrderedProps, ListOrderedEvents, ListOrderedSlots> {
}
export {};
