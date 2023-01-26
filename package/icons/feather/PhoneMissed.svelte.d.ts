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
export type PhoneMissedProps = typeof __propDef.props;
export type PhoneMissedEvents = typeof __propDef.events;
export type PhoneMissedSlots = typeof __propDef.slots;
export default class PhoneMissed extends SvelteComponentTyped<PhoneMissedProps, PhoneMissedEvents, PhoneMissedSlots> {
}
export {};
