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
export type ClockFillProps = typeof __propDef.props;
export type ClockFillEvents = typeof __propDef.events;
export type ClockFillSlots = typeof __propDef.slots;
export default class ClockFill extends SvelteComponentTyped<ClockFillProps, ClockFillEvents, ClockFillSlots> {
}
export {};
