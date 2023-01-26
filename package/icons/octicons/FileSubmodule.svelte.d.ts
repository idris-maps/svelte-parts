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
export type FileSubmoduleProps = typeof __propDef.props;
export type FileSubmoduleEvents = typeof __propDef.events;
export type FileSubmoduleSlots = typeof __propDef.slots;
export default class FileSubmodule extends SvelteComponentTyped<FileSubmoduleProps, FileSubmoduleEvents, FileSubmoduleSlots> {
}
export {};
