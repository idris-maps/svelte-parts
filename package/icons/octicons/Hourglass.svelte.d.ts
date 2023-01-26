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
export type HourglassProps = typeof __propDef.props;
export type HourglassEvents = typeof __propDef.events;
export type HourglassSlots = typeof __propDef.slots;
export default class Hourglass extends SvelteComponentTyped<HourglassProps, HourglassEvents, HourglassSlots> {
}
export {};
