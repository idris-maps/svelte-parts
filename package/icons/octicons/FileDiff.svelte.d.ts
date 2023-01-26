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
export type FileDiffProps = typeof __propDef.props;
export type FileDiffEvents = typeof __propDef.events;
export type FileDiffSlots = typeof __propDef.slots;
export default class FileDiff extends SvelteComponentTyped<FileDiffProps, FileDiffEvents, FileDiffSlots> {
}
export {};
