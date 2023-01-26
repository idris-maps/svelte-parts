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
export type WaterProps = typeof __propDef.props;
export type WaterEvents = typeof __propDef.events;
export type WaterSlots = typeof __propDef.slots;
export default class Water extends SvelteComponentTyped<WaterProps, WaterEvents, WaterSlots> {
}
export {};
