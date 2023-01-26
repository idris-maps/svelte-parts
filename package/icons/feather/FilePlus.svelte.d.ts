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
export type FilePlusProps = typeof __propDef.props;
export type FilePlusEvents = typeof __propDef.events;
export type FilePlusSlots = typeof __propDef.slots;
export default class FilePlus extends SvelteComponentTyped<FilePlusProps, FilePlusEvents, FilePlusSlots> {
}
export {};
