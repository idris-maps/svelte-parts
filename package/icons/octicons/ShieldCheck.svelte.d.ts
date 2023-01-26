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
export type ShieldCheckProps = typeof __propDef.props;
export type ShieldCheckEvents = typeof __propDef.events;
export type ShieldCheckSlots = typeof __propDef.slots;
export default class ShieldCheck extends SvelteComponentTyped<ShieldCheckProps, ShieldCheckEvents, ShieldCheckSlots> {
}
export {};
