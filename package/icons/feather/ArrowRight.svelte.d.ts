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
export type ArrowRightProps = typeof __propDef.props;
export type ArrowRightEvents = typeof __propDef.events;
export type ArrowRightSlots = typeof __propDef.slots;
export default class ArrowRight extends SvelteComponentTyped<ArrowRightProps, ArrowRightEvents, ArrowRightSlots> {
}
export {};
