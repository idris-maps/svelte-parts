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
export type FileSymlinkFileProps = typeof __propDef.props;
export type FileSymlinkFileEvents = typeof __propDef.events;
export type FileSymlinkFileSlots = typeof __propDef.slots;
export default class FileSymlinkFile extends SvelteComponentTyped<FileSymlinkFileProps, FileSymlinkFileEvents, FileSymlinkFileSlots> {
}
export {};
