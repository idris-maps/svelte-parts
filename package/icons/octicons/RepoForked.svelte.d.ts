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
export type RepoForkedProps = typeof __propDef.props;
export type RepoForkedEvents = typeof __propDef.events;
export type RepoForkedSlots = typeof __propDef.slots;
export default class RepoForked extends SvelteComponentTyped<RepoForkedProps, RepoForkedEvents, RepoForkedSlots> {
}
export {};
