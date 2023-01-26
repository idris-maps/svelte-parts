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
export type LaundryProps = typeof __propDef.props;
export type LaundryEvents = typeof __propDef.events;
export type LaundrySlots = typeof __propDef.slots;
export default class Laundry extends SvelteComponentTyped<LaundryProps, LaundryEvents, LaundrySlots> {
}
export {};
