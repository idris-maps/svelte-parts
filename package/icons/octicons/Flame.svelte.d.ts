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
export type FlameProps = typeof __propDef.props;
export type FlameEvents = typeof __propDef.events;
export type FlameSlots = typeof __propDef.slots;
export default class Flame extends SvelteComponentTyped<FlameProps, FlameEvents, FlameSlots> {
}
export {};
