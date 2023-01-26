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
export type ArrowRightCircleProps = typeof __propDef.props;
export type ArrowRightCircleEvents = typeof __propDef.events;
export type ArrowRightCircleSlots = typeof __propDef.slots;
export default class ArrowRightCircle extends SvelteComponentTyped<ArrowRightCircleProps, ArrowRightCircleEvents, ArrowRightCircleSlots> {
}
export {};
