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
export type HotSpringProps = typeof __propDef.props;
export type HotSpringEvents = typeof __propDef.events;
export type HotSpringSlots = typeof __propDef.slots;
export default class HotSpring extends SvelteComponentTyped<HotSpringProps, HotSpringEvents, HotSpringSlots> {
}
export {};
