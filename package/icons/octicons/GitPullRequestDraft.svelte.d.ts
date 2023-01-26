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
export type GitPullRequestDraftProps = typeof __propDef.props;
export type GitPullRequestDraftEvents = typeof __propDef.events;
export type GitPullRequestDraftSlots = typeof __propDef.slots;
export default class GitPullRequestDraft extends SvelteComponentTyped<GitPullRequestDraftProps, GitPullRequestDraftEvents, GitPullRequestDraftSlots> {
}
export {};
