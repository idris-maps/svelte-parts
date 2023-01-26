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
export type ArrowUpRightProps = typeof __propDef.props;
export type ArrowUpRightEvents = typeof __propDef.events;
export type ArrowUpRightSlots = typeof __propDef.slots;
export default class ArrowUpRight extends SvelteComponentTyped<ArrowUpRightProps, ArrowUpRightEvents, ArrowUpRightSlots> {
}
export {};
