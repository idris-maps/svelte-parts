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
export type PhoneProps = typeof __propDef.props;
export type PhoneEvents = typeof __propDef.events;
export type PhoneSlots = typeof __propDef.slots;
export default class Phone extends SvelteComponentTyped<PhoneProps, PhoneEvents, PhoneSlots> {
}
export {};
