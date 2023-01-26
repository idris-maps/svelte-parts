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
export type ArrowDownCircleProps = typeof __propDef.props;
export type ArrowDownCircleEvents = typeof __propDef.events;
export type ArrowDownCircleSlots = typeof __propDef.slots;
export default class ArrowDownCircle extends SvelteComponentTyped<ArrowDownCircleProps, ArrowDownCircleEvents, ArrowDownCircleSlots> {
}
export {};
