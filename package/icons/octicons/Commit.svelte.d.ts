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
export type CommitProps = typeof __propDef.props;
export type CommitEvents = typeof __propDef.events;
export type CommitSlots = typeof __propDef.slots;
export default class Commit extends SvelteComponentTyped<CommitProps, CommitEvents, CommitSlots> {
}
export {};
