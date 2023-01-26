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
export type GitPullRequestClosedProps = typeof __propDef.props;
export type GitPullRequestClosedEvents = typeof __propDef.events;
export type GitPullRequestClosedSlots = typeof __propDef.slots;
export default class GitPullRequestClosed extends SvelteComponentTyped<GitPullRequestClosedProps, GitPullRequestClosedEvents, GitPullRequestClosedSlots> {
}
export {};
