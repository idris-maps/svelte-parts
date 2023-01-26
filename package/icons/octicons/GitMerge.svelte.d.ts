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
export type GitMergeProps = typeof __propDef.props;
export type GitMergeEvents = typeof __propDef.events;
export type GitMergeSlots = typeof __propDef.slots;
export default class GitMerge extends SvelteComponentTyped<GitMergeProps, GitMergeEvents, GitMergeSlots> {
}
export {};
