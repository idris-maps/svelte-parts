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
export type PhoneForwardedProps = typeof __propDef.props;
export type PhoneForwardedEvents = typeof __propDef.events;
export type PhoneForwardedSlots = typeof __propDef.slots;
export default class PhoneForwarded extends SvelteComponentTyped<PhoneForwardedProps, PhoneForwardedEvents, PhoneForwardedSlots> {
}
export {};
