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
export type FenceProps = typeof __propDef.props;
export type FenceEvents = typeof __propDef.events;
export type FenceSlots = typeof __propDef.slots;
export default class Fence extends SvelteComponentTyped<FenceProps, FenceEvents, FenceSlots> {
}
export {};
