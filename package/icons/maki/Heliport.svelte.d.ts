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
export type HeliportProps = typeof __propDef.props;
export type HeliportEvents = typeof __propDef.events;
export type HeliportSlots = typeof __propDef.slots;
export default class Heliport extends SvelteComponentTyped<HeliportProps, HeliportEvents, HeliportSlots> {
}
export {};
