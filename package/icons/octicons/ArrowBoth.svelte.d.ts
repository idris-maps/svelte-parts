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
export type ArrowBothProps = typeof __propDef.props;
export type ArrowBothEvents = typeof __propDef.events;
export type ArrowBothSlots = typeof __propDef.slots;
export default class ArrowBoth extends SvelteComponentTyped<ArrowBothProps, ArrowBothEvents, ArrowBothSlots> {
}
export {};
