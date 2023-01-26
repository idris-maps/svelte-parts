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
export type PlusCircleProps = typeof __propDef.props;
export type PlusCircleEvents = typeof __propDef.events;
export type PlusCircleSlots = typeof __propDef.slots;
export default class PlusCircle extends SvelteComponentTyped<PlusCircleProps, PlusCircleEvents, PlusCircleSlots> {
}
export {};
