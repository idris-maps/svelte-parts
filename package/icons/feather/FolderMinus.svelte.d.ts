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
export type FolderMinusProps = typeof __propDef.props;
export type FolderMinusEvents = typeof __propDef.events;
export type FolderMinusSlots = typeof __propDef.slots;
export default class FolderMinus extends SvelteComponentTyped<FolderMinusProps, FolderMinusEvents, FolderMinusSlots> {
}
export {};
