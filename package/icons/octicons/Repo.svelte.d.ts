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
export type RepoProps = typeof __propDef.props;
export type RepoEvents = typeof __propDef.events;
export type RepoSlots = typeof __propDef.slots;
export default class Repo extends SvelteComponentTyped<RepoProps, RepoEvents, RepoSlots> {
}
export {};
