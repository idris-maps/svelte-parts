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
export type FileDirectoryProps = typeof __propDef.props;
export type FileDirectoryEvents = typeof __propDef.events;
export type FileDirectorySlots = typeof __propDef.slots;
export default class FileDirectory extends SvelteComponentTyped<FileDirectoryProps, FileDirectoryEvents, FileDirectorySlots> {
}
export {};
