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
export type FolderProps = typeof __propDef.props;
export type FolderEvents = typeof __propDef.events;
export type FolderSlots = typeof __propDef.slots;
export default class Folder extends SvelteComponentTyped<FolderProps, FolderEvents, FolderSlots> {
}
export {};
