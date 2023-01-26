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
export type BusProps = typeof __propDef.props;
export type BusEvents = typeof __propDef.events;
export type BusSlots = typeof __propDef.slots;
export default class Bus extends SvelteComponentTyped<BusProps, BusEvents, BusSlots> {
}
export {};
