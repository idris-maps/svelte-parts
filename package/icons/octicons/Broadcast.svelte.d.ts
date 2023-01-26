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
export type BroadcastProps = typeof __propDef.props;
export type BroadcastEvents = typeof __propDef.events;
export type BroadcastSlots = typeof __propDef.slots;
export default class Broadcast extends SvelteComponentTyped<BroadcastProps, BroadcastEvents, BroadcastSlots> {
}
export {};
