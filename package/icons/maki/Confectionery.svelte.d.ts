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
export type ConfectioneryProps = typeof __propDef.props;
export type ConfectioneryEvents = typeof __propDef.events;
export type ConfectionerySlots = typeof __propDef.slots;
export default class Confectionery extends SvelteComponentTyped<ConfectioneryProps, ConfectioneryEvents, ConfectionerySlots> {
}
export {};
