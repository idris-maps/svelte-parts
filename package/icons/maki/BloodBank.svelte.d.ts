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
export type BloodBankProps = typeof __propDef.props;
export type BloodBankEvents = typeof __propDef.events;
export type BloodBankSlots = typeof __propDef.slots;
export default class BloodBank extends SvelteComponentTyped<BloodBankProps, BloodBankEvents, BloodBankSlots> {
}
export {};
