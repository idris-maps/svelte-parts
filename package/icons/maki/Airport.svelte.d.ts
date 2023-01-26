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
export type AirportProps = typeof __propDef.props;
export type AirportEvents = typeof __propDef.events;
export type AirportSlots = typeof __propDef.slots;
export default class Airport extends SvelteComponentTyped<AirportProps, AirportEvents, AirportSlots> {
}
export {};
