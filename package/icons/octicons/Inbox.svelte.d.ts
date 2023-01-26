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
export type InboxProps = typeof __propDef.props;
export type InboxEvents = typeof __propDef.events;
export type InboxSlots = typeof __propDef.slots;
export default class Inbox extends SvelteComponentTyped<InboxProps, InboxEvents, InboxSlots> {
}
export {};
