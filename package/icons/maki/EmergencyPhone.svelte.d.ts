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
export type EmergencyPhoneProps = typeof __propDef.props;
export type EmergencyPhoneEvents = typeof __propDef.events;
export type EmergencyPhoneSlots = typeof __propDef.slots;
export default class EmergencyPhone extends SvelteComponentTyped<EmergencyPhoneProps, EmergencyPhoneEvents, EmergencyPhoneSlots> {
}
export {};
