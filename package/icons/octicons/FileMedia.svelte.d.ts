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
export type FileMediaProps = typeof __propDef.props;
export type FileMediaEvents = typeof __propDef.events;
export type FileMediaSlots = typeof __propDef.slots;
export default class FileMedia extends SvelteComponentTyped<FileMediaProps, FileMediaEvents, FileMediaSlots> {
}
export {};
