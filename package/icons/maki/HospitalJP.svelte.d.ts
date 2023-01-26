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
export type HospitalJpProps = typeof __propDef.props;
export type HospitalJpEvents = typeof __propDef.events;
export type HospitalJpSlots = typeof __propDef.slots;
export default class HospitalJp extends SvelteComponentTyped<HospitalJpProps, HospitalJpEvents, HospitalJpSlots> {
}
export {};
