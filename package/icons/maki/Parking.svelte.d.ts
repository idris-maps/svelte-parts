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
export type ParkingProps = typeof __propDef.props;
export type ParkingEvents = typeof __propDef.events;
export type ParkingSlots = typeof __propDef.slots;
export default class Parking extends SvelteComponentTyped<ParkingProps, ParkingEvents, ParkingSlots> {
}
export {};
