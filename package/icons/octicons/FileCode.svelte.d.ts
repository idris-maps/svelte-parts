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
export type FileCodeProps = typeof __propDef.props;
export type FileCodeEvents = typeof __propDef.events;
export type FileCodeSlots = typeof __propDef.slots;
export default class FileCode extends SvelteComponentTyped<FileCodeProps, FileCodeEvents, FileCodeSlots> {
}
export {};
