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
export type IssueTrackedByProps = typeof __propDef.props;
export type IssueTrackedByEvents = typeof __propDef.events;
export type IssueTrackedBySlots = typeof __propDef.slots;
export default class IssueTrackedBy extends SvelteComponentTyped<IssueTrackedByProps, IssueTrackedByEvents, IssueTrackedBySlots> {
}
export {};
