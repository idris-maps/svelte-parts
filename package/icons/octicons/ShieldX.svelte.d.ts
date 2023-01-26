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
export type ShieldXProps = typeof __propDef.props;
export type ShieldXEvents = typeof __propDef.events;
export type ShieldXSlots = typeof __propDef.slots;
export default class ShieldX extends SvelteComponentTyped<ShieldXProps, ShieldXEvents, ShieldXSlots> {
}
export {};
