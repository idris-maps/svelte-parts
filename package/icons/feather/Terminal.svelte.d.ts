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
export type TerminalProps = typeof __propDef.props;
export type TerminalEvents = typeof __propDef.events;
export type TerminalSlots = typeof __propDef.slots;
export default class Terminal extends SvelteComponentTyped<TerminalProps, TerminalEvents, TerminalSlots> {
}
export {};
