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
export type ChromeProps = typeof __propDef.props;
export type ChromeEvents = typeof __propDef.events;
export type ChromeSlots = typeof __propDef.slots;
export default class Chrome extends SvelteComponentTyped<ChromeProps, ChromeEvents, ChromeSlots> {
}
export {};
