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
export type ListUnorderedProps = typeof __propDef.props;
export type ListUnorderedEvents = typeof __propDef.events;
export type ListUnorderedSlots = typeof __propDef.slots;
export default class ListUnordered extends SvelteComponentTyped<ListUnorderedProps, ListUnorderedEvents, ListUnorderedSlots> {
}
export {};
