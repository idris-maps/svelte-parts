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
export type ParkingPaidProps = typeof __propDef.props;
export type ParkingPaidEvents = typeof __propDef.events;
export type ParkingPaidSlots = typeof __propDef.slots;
export default class ParkingPaid extends SvelteComponentTyped<ParkingPaidProps, ParkingPaidEvents, ParkingPaidSlots> {
}
export {};
