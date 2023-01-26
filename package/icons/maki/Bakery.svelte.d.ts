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
export type BakeryProps = typeof __propDef.props;
export type BakeryEvents = typeof __propDef.events;
export type BakerySlots = typeof __propDef.slots;
export default class Bakery extends SvelteComponentTyped<BakeryProps, BakeryEvents, BakerySlots> {
}
export {};
