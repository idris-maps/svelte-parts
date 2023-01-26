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
export type GardenCentreProps = typeof __propDef.props;
export type GardenCentreEvents = typeof __propDef.events;
export type GardenCentreSlots = typeof __propDef.slots;
export default class GardenCentre extends SvelteComponentTyped<GardenCentreProps, GardenCentreEvents, GardenCentreSlots> {
}
export {};
