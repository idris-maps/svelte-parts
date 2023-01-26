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
export type GrabberProps = typeof __propDef.props;
export type GrabberEvents = typeof __propDef.events;
export type GrabberSlots = typeof __propDef.slots;
export default class Grabber extends SvelteComponentTyped<GrabberProps, GrabberEvents, GrabberSlots> {
}
export {};
