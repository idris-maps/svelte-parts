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
export type BrowserProps = typeof __propDef.props;
export type BrowserEvents = typeof __propDef.events;
export type BrowserSlots = typeof __propDef.slots;
export default class Browser extends SvelteComponentTyped<BrowserProps, BrowserEvents, BrowserSlots> {
}
export {};
