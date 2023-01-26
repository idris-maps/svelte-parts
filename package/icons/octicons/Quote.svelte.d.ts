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
export type QuoteProps = typeof __propDef.props;
export type QuoteEvents = typeof __propDef.events;
export type QuoteSlots = typeof __propDef.slots;
export default class Quote extends SvelteComponentTyped<QuoteProps, QuoteEvents, QuoteSlots> {
}
export {};
