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
export type XOctagonProps = typeof __propDef.props;
export type XOctagonEvents = typeof __propDef.events;
export type XOctagonSlots = typeof __propDef.slots;
export default class XOctagon extends SvelteComponentTyped<XOctagonProps, XOctagonEvents, XOctagonSlots> {
}
export {};
