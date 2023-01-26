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
export type LibraryProps = typeof __propDef.props;
export type LibraryEvents = typeof __propDef.events;
export type LibrarySlots = typeof __propDef.slots;
export default class Library extends SvelteComponentTyped<LibraryProps, LibraryEvents, LibrarySlots> {
}
export {};
