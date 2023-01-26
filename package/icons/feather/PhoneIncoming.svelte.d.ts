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
export type PhoneIncomingProps = typeof __propDef.props;
export type PhoneIncomingEvents = typeof __propDef.events;
export type PhoneIncomingSlots = typeof __propDef.slots;
export default class PhoneIncoming extends SvelteComponentTyped<PhoneIncomingProps, PhoneIncomingEvents, PhoneIncomingSlots> {
}
export {};
