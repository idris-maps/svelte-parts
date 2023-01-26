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
export type FolderPlusProps = typeof __propDef.props;
export type FolderPlusEvents = typeof __propDef.events;
export type FolderPlusSlots = typeof __propDef.slots;
export default class FolderPlus extends SvelteComponentTyped<FolderPlusProps, FolderPlusEvents, FolderPlusSlots> {
}
export {};
