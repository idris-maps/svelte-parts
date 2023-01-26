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
export type DentistProps = typeof __propDef.props;
export type DentistEvents = typeof __propDef.events;
export type DentistSlots = typeof __propDef.slots;
export default class Dentist extends SvelteComponentTyped<DentistProps, DentistEvents, DentistSlots> {
}
export {};
