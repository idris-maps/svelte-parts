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
export type HeartProps = typeof __propDef.props;
export type HeartEvents = typeof __propDef.events;
export type HeartSlots = typeof __propDef.slots;
export default class Heart extends SvelteComponentTyped<HeartProps, HeartEvents, HeartSlots> {
}
export {};
