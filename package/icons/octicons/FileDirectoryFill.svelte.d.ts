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
export type FileDirectoryFillProps = typeof __propDef.props;
export type FileDirectoryFillEvents = typeof __propDef.events;
export type FileDirectoryFillSlots = typeof __propDef.slots;
export default class FileDirectoryFill extends SvelteComponentTyped<FileDirectoryFillProps, FileDirectoryFillEvents, FileDirectoryFillSlots> {
}
export {};
