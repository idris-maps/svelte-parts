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
export type AtSignProps = typeof __propDef.props;
export type AtSignEvents = typeof __propDef.events;
export type AtSignSlots = typeof __propDef.slots;
export default class AtSign extends SvelteComponentTyped<AtSignProps, AtSignEvents, AtSignSlots> {
}
export {};
