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
export type PhoneOutgoingProps = typeof __propDef.props;
export type PhoneOutgoingEvents = typeof __propDef.events;
export type PhoneOutgoingSlots = typeof __propDef.slots;
export default class PhoneOutgoing extends SvelteComponentTyped<PhoneOutgoingProps, PhoneOutgoingEvents, PhoneOutgoingSlots> {
}
export {};
