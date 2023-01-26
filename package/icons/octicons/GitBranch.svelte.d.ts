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
export type GitBranchProps = typeof __propDef.props;
export type GitBranchEvents = typeof __propDef.events;
export type GitBranchSlots = typeof __propDef.slots;
export default class GitBranch extends SvelteComponentTyped<GitBranchProps, GitBranchEvents, GitBranchSlots> {
}
export {};
