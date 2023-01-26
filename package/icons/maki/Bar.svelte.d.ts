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
export type BarProps = typeof __propDef.props;
export type BarEvents = typeof __propDef.events;
export type BarSlots = typeof __propDef.slots;
export default class Bar extends SvelteComponentTyped<BarProps, BarEvents, BarSlots> {
}
export {};
