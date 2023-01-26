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
export type FileZipProps = typeof __propDef.props;
export type FileZipEvents = typeof __propDef.events;
export type FileZipSlots = typeof __propDef.slots;
export default class FileZip extends SvelteComponentTyped<FileZipProps, FileZipEvents, FileZipSlots> {
}
export {};
