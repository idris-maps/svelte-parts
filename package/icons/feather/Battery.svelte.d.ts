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
export type BatteryProps = typeof __propDef.props;
export type BatteryEvents = typeof __propDef.events;
export type BatterySlots = typeof __propDef.slots;
export default class Battery extends SvelteComponentTyped<BatteryProps, BatteryEvents, BatterySlots> {
}
export {};
