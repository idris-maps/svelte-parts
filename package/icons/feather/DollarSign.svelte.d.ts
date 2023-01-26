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
export type DollarSignProps = typeof __propDef.props;
export type DollarSignEvents = typeof __propDef.events;
export type DollarSignSlots = typeof __propDef.slots;
export default class DollarSign extends SvelteComponentTyped<DollarSignProps, DollarSignEvents, DollarSignSlots> {
}
export {};
