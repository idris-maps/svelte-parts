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
export type FireStationProps = typeof __propDef.props;
export type FireStationEvents = typeof __propDef.events;
export type FireStationSlots = typeof __propDef.slots;
export default class FireStation extends SvelteComponentTyped<FireStationProps, FireStationEvents, FireStationSlots> {
}
export {};
