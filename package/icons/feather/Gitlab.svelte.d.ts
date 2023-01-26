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
export type GitlabProps = typeof __propDef.props;
export type GitlabEvents = typeof __propDef.events;
export type GitlabSlots = typeof __propDef.slots;
export default class Gitlab extends SvelteComponentTyped<GitlabProps, GitlabEvents, GitlabSlots> {
}
export {};
