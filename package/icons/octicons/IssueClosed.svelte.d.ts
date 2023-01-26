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
export type IssueClosedProps = typeof __propDef.props;
export type IssueClosedEvents = typeof __propDef.events;
export type IssueClosedSlots = typeof __propDef.slots;
export default class IssueClosed extends SvelteComponentTyped<IssueClosedProps, IssueClosedEvents, IssueClosedSlots> {
}
export {};
