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
export type PinProps = typeof __propDef.props;
export type PinEvents = typeof __propDef.events;
export type PinSlots = typeof __propDef.slots;
export default class Pin extends SvelteComponentTyped<PinProps, PinEvents, PinSlots> {
}
export {};
