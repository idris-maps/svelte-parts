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
export type ChargingStationProps = typeof __propDef.props;
export type ChargingStationEvents = typeof __propDef.events;
export type ChargingStationSlots = typeof __propDef.slots;
export default class ChargingStation extends SvelteComponentTyped<ChargingStationProps, ChargingStationEvents, ChargingStationSlots> {
}
export {};
