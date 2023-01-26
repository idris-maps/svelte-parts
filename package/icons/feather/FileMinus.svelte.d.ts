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
export type FileMinusProps = typeof __propDef.props;
export type FileMinusEvents = typeof __propDef.events;
export type FileMinusSlots = typeof __propDef.slots;
export default class FileMinus extends SvelteComponentTyped<FileMinusProps, FileMinusEvents, FileMinusSlots> {
}
export {};
