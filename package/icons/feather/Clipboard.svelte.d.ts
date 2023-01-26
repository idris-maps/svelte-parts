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
export type ClipboardProps = typeof __propDef.props;
export type ClipboardEvents = typeof __propDef.events;
export type ClipboardSlots = typeof __propDef.slots;
export default class Clipboard extends SvelteComponentTyped<ClipboardProps, ClipboardEvents, ClipboardSlots> {
}
export {};
