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
export type IssueTrackedInProps = typeof __propDef.props;
export type IssueTrackedInEvents = typeof __propDef.events;
export type IssueTrackedInSlots = typeof __propDef.slots;
export default class IssueTrackedIn extends SvelteComponentTyped<IssueTrackedInProps, IssueTrackedInEvents, IssueTrackedInSlots> {
}
export {};
