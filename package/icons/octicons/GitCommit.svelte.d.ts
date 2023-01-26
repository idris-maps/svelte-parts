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
export type GitCommitProps = typeof __propDef.props;
export type GitCommitEvents = typeof __propDef.events;
export type GitCommitSlots = typeof __propDef.slots;
export default class GitCommit extends SvelteComponentTyped<GitCommitProps, GitCommitEvents, GitCommitSlots> {
}
export {};
