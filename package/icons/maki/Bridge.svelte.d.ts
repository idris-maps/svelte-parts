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
export type BridgeProps = typeof __propDef.props;
export type BridgeEvents = typeof __propDef.events;
export type BridgeSlots = typeof __propDef.slots;
export default class Bridge extends SvelteComponentTyped<BridgeProps, BridgeEvents, BridgeSlots> {
}
export {};
