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
export type StopProps = typeof __propDef.props;
export type StopEvents = typeof __propDef.events;
export type StopSlots = typeof __propDef.slots;
export default class Stop extends SvelteComponentTyped<StopProps, StopEvents, StopSlots> {
}
export {};
