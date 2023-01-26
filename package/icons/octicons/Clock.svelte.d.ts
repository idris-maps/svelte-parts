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
export type ClockProps = typeof __propDef.props;
export type ClockEvents = typeof __propDef.events;
export type ClockSlots = typeof __propDef.slots;
export default class Clock extends SvelteComponentTyped<ClockProps, ClockEvents, ClockSlots> {
}
export {};
