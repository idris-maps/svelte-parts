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
export type RecyclingProps = typeof __propDef.props;
export type RecyclingEvents = typeof __propDef.events;
export type RecyclingSlots = typeof __propDef.slots;
export default class Recycling extends SvelteComponentTyped<RecyclingProps, RecyclingEvents, RecyclingSlots> {
}
export {};
