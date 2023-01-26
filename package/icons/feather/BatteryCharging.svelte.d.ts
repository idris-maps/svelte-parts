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
export type BatteryChargingProps = typeof __propDef.props;
export type BatteryChargingEvents = typeof __propDef.events;
export type BatteryChargingSlots = typeof __propDef.slots;
export default class BatteryCharging extends SvelteComponentTyped<BatteryChargingProps, BatteryChargingEvents, BatteryChargingSlots> {
}
export {};
