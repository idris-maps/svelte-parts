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
export type HospitalProps = typeof __propDef.props;
export type HospitalEvents = typeof __propDef.events;
export type HospitalSlots = typeof __propDef.slots;
export default class Hospital extends SvelteComponentTyped<HospitalProps, HospitalEvents, HospitalSlots> {
}
export {};
