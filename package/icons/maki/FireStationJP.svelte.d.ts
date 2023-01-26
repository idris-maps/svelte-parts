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
export type FireStationJpProps = typeof __propDef.props;
export type FireStationJpEvents = typeof __propDef.events;
export type FireStationJpSlots = typeof __propDef.slots;
export default class FireStationJp extends SvelteComponentTyped<FireStationJpProps, FireStationJpEvents, FireStationJpSlots> {
}
export {};
