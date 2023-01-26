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
export type SyncProps = typeof __propDef.props;
export type SyncEvents = typeof __propDef.events;
export type SyncSlots = typeof __propDef.slots;
export default class Sync extends SvelteComponentTyped<SyncProps, SyncEvents, SyncSlots> {
}
export {};
