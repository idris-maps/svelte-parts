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
export type InfinityProps = typeof __propDef.props;
export type InfinityEvents = typeof __propDef.events;
export type InfinitySlots = typeof __propDef.slots;
export default class Infinity extends SvelteComponentTyped<InfinityProps, InfinityEvents, InfinitySlots> {
}
export {};
