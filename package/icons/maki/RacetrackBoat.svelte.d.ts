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
export type RacetrackBoatProps = typeof __propDef.props;
export type RacetrackBoatEvents = typeof __propDef.events;
export type RacetrackBoatSlots = typeof __propDef.slots;
export default class RacetrackBoat extends SvelteComponentTyped<RacetrackBoatProps, RacetrackBoatEvents, RacetrackBoatSlots> {
}
export {};
