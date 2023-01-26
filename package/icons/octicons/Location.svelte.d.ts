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
export type LocationProps = typeof __propDef.props;
export type LocationEvents = typeof __propDef.events;
export type LocationSlots = typeof __propDef.slots;
export default class Location extends SvelteComponentTyped<LocationProps, LocationEvents, LocationSlots> {
}
export {};
