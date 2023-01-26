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
export type TheatreProps = typeof __propDef.props;
export type TheatreEvents = typeof __propDef.events;
export type TheatreSlots = typeof __propDef.slots;
export default class Theatre extends SvelteComponentTyped<TheatreProps, TheatreEvents, TheatreSlots> {
}
export {};
