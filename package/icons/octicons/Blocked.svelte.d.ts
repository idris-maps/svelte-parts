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
export type BlockedProps = typeof __propDef.props;
export type BlockedEvents = typeof __propDef.events;
export type BlockedSlots = typeof __propDef.slots;
export default class Blocked extends SvelteComponentTyped<BlockedProps, BlockedEvents, BlockedSlots> {
}
export {};
