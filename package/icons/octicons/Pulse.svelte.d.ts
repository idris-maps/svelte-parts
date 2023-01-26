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
export type PulseProps = typeof __propDef.props;
export type PulseEvents = typeof __propDef.events;
export type PulseSlots = typeof __propDef.slots;
export default class Pulse extends SvelteComponentTyped<PulseProps, PulseEvents, PulseSlots> {
}
export {};
