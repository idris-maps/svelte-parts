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
export type ListProps = typeof __propDef.props;
export type ListEvents = typeof __propDef.events;
export type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
