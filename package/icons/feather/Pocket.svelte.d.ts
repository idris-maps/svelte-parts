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
export type PocketProps = typeof __propDef.props;
export type PocketEvents = typeof __propDef.events;
export type PocketSlots = typeof __propDef.slots;
export default class Pocket extends SvelteComponentTyped<PocketProps, PocketEvents, PocketSlots> {
}
export {};
