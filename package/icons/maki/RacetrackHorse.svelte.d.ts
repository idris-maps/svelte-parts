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
export type RacetrackHorseProps = typeof __propDef.props;
export type RacetrackHorseEvents = typeof __propDef.events;
export type RacetrackHorseSlots = typeof __propDef.slots;
export default class RacetrackHorse extends SvelteComponentTyped<RacetrackHorseProps, RacetrackHorseEvents, RacetrackHorseSlots> {
}
export {};
