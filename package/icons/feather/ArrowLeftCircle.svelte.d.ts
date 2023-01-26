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
export type ArrowLeftCircleProps = typeof __propDef.props;
export type ArrowLeftCircleEvents = typeof __propDef.events;
export type ArrowLeftCircleSlots = typeof __propDef.slots;
export default class ArrowLeftCircle extends SvelteComponentTyped<ArrowLeftCircleProps, ArrowLeftCircleEvents, ArrowLeftCircleSlots> {
}
export {};
