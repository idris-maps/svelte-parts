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
export type NoteProps = typeof __propDef.props;
export type NoteEvents = typeof __propDef.events;
export type NoteSlots = typeof __propDef.slots;
export default class Note extends SvelteComponentTyped<NoteProps, NoteEvents, NoteSlots> {
}
export {};
