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
export type CarRepairProps = typeof __propDef.props;
export type CarRepairEvents = typeof __propDef.events;
export type CarRepairSlots = typeof __propDef.slots;
export default class CarRepair extends SvelteComponentTyped<CarRepairProps, CarRepairEvents, CarRepairSlots> {
}
export {};
