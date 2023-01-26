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
export type RepoTemplateProps = typeof __propDef.props;
export type RepoTemplateEvents = typeof __propDef.events;
export type RepoTemplateSlots = typeof __propDef.slots;
export default class RepoTemplate extends SvelteComponentTyped<RepoTemplateProps, RepoTemplateEvents, RepoTemplateSlots> {
}
export {};
