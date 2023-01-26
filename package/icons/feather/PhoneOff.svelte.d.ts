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
export type PhoneOffProps = typeof __propDef.props;
export type PhoneOffEvents = typeof __propDef.events;
export type PhoneOffSlots = typeof __propDef.slots;
export default class PhoneOff extends SvelteComponentTyped<PhoneOffProps, PhoneOffEvents, PhoneOffSlots> {
}
export {};
