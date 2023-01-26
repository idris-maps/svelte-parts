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
export type GroceryProps = typeof __propDef.props;
export type GroceryEvents = typeof __propDef.events;
export type GrocerySlots = typeof __propDef.slots;
export default class Grocery extends SvelteComponentTyped<GroceryProps, GroceryEvents, GrocerySlots> {
}
export {};
