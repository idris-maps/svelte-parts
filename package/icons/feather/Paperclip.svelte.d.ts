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
export type PaperclipProps = typeof __propDef.props;
export type PaperclipEvents = typeof __propDef.events;
export type PaperclipSlots = typeof __propDef.slots;
export default class Paperclip extends SvelteComponentTyped<PaperclipProps, PaperclipEvents, PaperclipSlots> {
}
export {};
