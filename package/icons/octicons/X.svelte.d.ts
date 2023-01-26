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
export type XProps = typeof __propDef.props;
export type XEvents = typeof __propDef.events;
export type XSlots = typeof __propDef.slots;
export default class X extends SvelteComponentTyped<XProps, XEvents, XSlots> {
}
export {};
