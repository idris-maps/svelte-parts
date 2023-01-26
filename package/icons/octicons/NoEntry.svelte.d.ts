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
export type NoEntryProps = typeof __propDef.props;
export type NoEntryEvents = typeof __propDef.events;
export type NoEntrySlots = typeof __propDef.slots;
export default class NoEntry extends SvelteComponentTyped<NoEntryProps, NoEntryEvents, NoEntrySlots> {
}
export {};
