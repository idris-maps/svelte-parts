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
export type ShoeProps = typeof __propDef.props;
export type ShoeEvents = typeof __propDef.events;
export type ShoeSlots = typeof __propDef.slots;
export default class Shoe extends SvelteComponentTyped<ShoeProps, ShoeEvents, ShoeSlots> {
}
export {};
