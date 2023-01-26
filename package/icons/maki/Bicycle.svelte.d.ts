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
export type BicycleProps = typeof __propDef.props;
export type BicycleEvents = typeof __propDef.events;
export type BicycleSlots = typeof __propDef.slots;
export default class Bicycle extends SvelteComponentTyped<BicycleProps, BicycleEvents, BicycleSlots> {
}
export {};
