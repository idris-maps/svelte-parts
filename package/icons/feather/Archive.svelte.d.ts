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
export type ArchiveProps = typeof __propDef.props;
export type ArchiveEvents = typeof __propDef.events;
export type ArchiveSlots = typeof __propDef.slots;
export default class Archive extends SvelteComponentTyped<ArchiveProps, ArchiveEvents, ArchiveSlots> {
}
export {};
