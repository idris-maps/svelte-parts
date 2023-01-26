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
export type AirfieldProps = typeof __propDef.props;
export type AirfieldEvents = typeof __propDef.events;
export type AirfieldSlots = typeof __propDef.slots;
export default class Airfield extends SvelteComponentTyped<AirfieldProps, AirfieldEvents, AirfieldSlots> {
}
export {};
