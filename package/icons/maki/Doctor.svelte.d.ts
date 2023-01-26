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
export type DoctorProps = typeof __propDef.props;
export type DoctorEvents = typeof __propDef.events;
export type DoctorSlots = typeof __propDef.slots;
export default class Doctor extends SvelteComponentTyped<DoctorProps, DoctorEvents, DoctorSlots> {
}
export {};
