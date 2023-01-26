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
export type FuelProps = typeof __propDef.props;
export type FuelEvents = typeof __propDef.events;
export type FuelSlots = typeof __propDef.slots;
export default class Fuel extends SvelteComponentTyped<FuelProps, FuelEvents, FuelSlots> {
}
export {};
