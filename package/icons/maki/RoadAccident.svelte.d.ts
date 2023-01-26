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
export type RoadAccidentProps = typeof __propDef.props;
export type RoadAccidentEvents = typeof __propDef.events;
export type RoadAccidentSlots = typeof __propDef.slots;
export default class RoadAccident extends SvelteComponentTyped<RoadAccidentProps, RoadAccidentEvents, RoadAccidentSlots> {
}
export {};
