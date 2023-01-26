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
export type WaterfallProps = typeof __propDef.props;
export type WaterfallEvents = typeof __propDef.events;
export type WaterfallSlots = typeof __propDef.slots;
export default class Waterfall extends SvelteComponentTyped<WaterfallProps, WaterfallEvents, WaterfallSlots> {
}
export {};
