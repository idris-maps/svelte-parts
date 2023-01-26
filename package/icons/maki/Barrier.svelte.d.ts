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
export type BarrierProps = typeof __propDef.props;
export type BarrierEvents = typeof __propDef.events;
export type BarrierSlots = typeof __propDef.slots;
export default class Barrier extends SvelteComponentTyped<BarrierProps, BarrierEvents, BarrierSlots> {
}
export {};
