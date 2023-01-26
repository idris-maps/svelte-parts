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
export type FileBinaryProps = typeof __propDef.props;
export type FileBinaryEvents = typeof __propDef.events;
export type FileBinarySlots = typeof __propDef.slots;
export default class FileBinary extends SvelteComponentTyped<FileBinaryProps, FileBinaryEvents, FileBinarySlots> {
}
export {};
