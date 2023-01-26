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
export type FramerProps = typeof __propDef.props;
export type FramerEvents = typeof __propDef.events;
export type FramerSlots = typeof __propDef.slots;
export default class Framer extends SvelteComponentTyped<FramerProps, FramerEvents, FramerSlots> {
}
export {};
