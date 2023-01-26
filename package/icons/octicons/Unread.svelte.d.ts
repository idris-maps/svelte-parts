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
export type UnreadProps = typeof __propDef.props;
export type UnreadEvents = typeof __propDef.events;
export type UnreadSlots = typeof __propDef.slots;
export default class Unread extends SvelteComponentTyped<UnreadProps, UnreadEvents, UnreadSlots> {
}
export {};
