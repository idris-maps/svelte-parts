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
export type RacetrackCyclingProps = typeof __propDef.props;
export type RacetrackCyclingEvents = typeof __propDef.events;
export type RacetrackCyclingSlots = typeof __propDef.slots;
export default class RacetrackCycling extends SvelteComponentTyped<RacetrackCyclingProps, RacetrackCyclingEvents, RacetrackCyclingSlots> {
}
export {};
