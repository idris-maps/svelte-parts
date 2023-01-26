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
export type ThermometerProps = typeof __propDef.props;
export type ThermometerEvents = typeof __propDef.events;
export type ThermometerSlots = typeof __propDef.slots;
export default class Thermometer extends SvelteComponentTyped<ThermometerProps, ThermometerEvents, ThermometerSlots> {
}
export {};
