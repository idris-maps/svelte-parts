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
export type ParkingGarageProps = typeof __propDef.props;
export type ParkingGarageEvents = typeof __propDef.events;
export type ParkingGarageSlots = typeof __propDef.slots;
export default class ParkingGarage extends SvelteComponentTyped<ParkingGarageProps, ParkingGarageEvents, ParkingGarageSlots> {
}
export {};
