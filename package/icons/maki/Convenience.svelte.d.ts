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
export type ConvenienceProps = typeof __propDef.props;
export type ConvenienceEvents = typeof __propDef.events;
export type ConvenienceSlots = typeof __propDef.slots;
export default class Convenience extends SvelteComponentTyped<ConvenienceProps, ConvenienceEvents, ConvenienceSlots> {
}
export {};
