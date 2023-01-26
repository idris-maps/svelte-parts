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
export type ArrowUpCircleProps = typeof __propDef.props;
export type ArrowUpCircleEvents = typeof __propDef.events;
export type ArrowUpCircleSlots = typeof __propDef.slots;
export default class ArrowUpCircle extends SvelteComponentTyped<ArrowUpCircleProps, ArrowUpCircleEvents, ArrowUpCircleSlots> {
}
export {};
