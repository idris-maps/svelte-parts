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
export type PhoneCallProps = typeof __propDef.props;
export type PhoneCallEvents = typeof __propDef.events;
export type PhoneCallSlots = typeof __propDef.slots;
export default class PhoneCall extends SvelteComponentTyped<PhoneCallProps, PhoneCallEvents, PhoneCallSlots> {
}
export {};
