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
export type FileProps = typeof __propDef.props;
export type FileEvents = typeof __propDef.events;
export type FileSlots = typeof __propDef.slots;
export default class File extends SvelteComponentTyped<FileProps, FileEvents, FileSlots> {
}
export {};
