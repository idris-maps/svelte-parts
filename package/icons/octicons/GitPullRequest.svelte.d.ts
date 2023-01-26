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
export type GitPullRequestProps = typeof __propDef.props;
export type GitPullRequestEvents = typeof __propDef.events;
export type GitPullRequestSlots = typeof __propDef.slots;
export default class GitPullRequest extends SvelteComponentTyped<GitPullRequestProps, GitPullRequestEvents, GitPullRequestSlots> {
}
export {};
