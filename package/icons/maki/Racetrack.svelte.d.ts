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
export type RacetrackProps = typeof __propDef.props;
export type RacetrackEvents = typeof __propDef.events;
export type RacetrackSlots = typeof __propDef.slots;
export default class Racetrack extends SvelteComponentTyped<RacetrackProps, RacetrackEvents, RacetrackSlots> {
}
export {};
