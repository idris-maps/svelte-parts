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
export type RepoLockedProps = typeof __propDef.props;
export type RepoLockedEvents = typeof __propDef.events;
export type RepoLockedSlots = typeof __propDef.slots;
export default class RepoLocked extends SvelteComponentTyped<RepoLockedProps, RepoLockedEvents, RepoLockedSlots> {
}
export {};
