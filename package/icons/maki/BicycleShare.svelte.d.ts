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
export type BicycleShareProps = typeof __propDef.props;
export type BicycleShareEvents = typeof __propDef.events;
export type BicycleShareSlots = typeof __propDef.slots;
export default class BicycleShare extends SvelteComponentTyped<BicycleShareProps, BicycleShareEvents, BicycleShareSlots> {
}
export {};
