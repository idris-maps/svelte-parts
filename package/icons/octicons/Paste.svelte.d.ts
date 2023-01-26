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
export type PasteProps = typeof __propDef.props;
export type PasteEvents = typeof __propDef.events;
export type PasteSlots = typeof __propDef.slots;
export default class Paste extends SvelteComponentTyped<PasteProps, PasteEvents, PasteSlots> {
}
export {};
