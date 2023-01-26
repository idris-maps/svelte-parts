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
export type GitCompareProps = typeof __propDef.props;
export type GitCompareEvents = typeof __propDef.events;
export type GitCompareSlots = typeof __propDef.slots;
export default class GitCompare extends SvelteComponentTyped<GitCompareProps, GitCompareEvents, GitCompareSlots> {
}
export {};
