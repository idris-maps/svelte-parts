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
export type BellOffProps = typeof __propDef.props;
export type BellOffEvents = typeof __propDef.events;
export type BellOffSlots = typeof __propDef.slots;
export default class BellOff extends SvelteComponentTyped<BellOffProps, BellOffEvents, BellOffSlots> {
}
export {};
