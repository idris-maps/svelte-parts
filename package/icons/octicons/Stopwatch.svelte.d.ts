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
export type StopwatchProps = typeof __propDef.props;
export type StopwatchEvents = typeof __propDef.events;
export type StopwatchSlots = typeof __propDef.slots;
export default class Stopwatch extends SvelteComponentTyped<StopwatchProps, StopwatchEvents, StopwatchSlots> {
}
export {};
