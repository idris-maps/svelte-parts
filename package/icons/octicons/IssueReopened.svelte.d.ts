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
export type IssueReopenedProps = typeof __propDef.props;
export type IssueReopenedEvents = typeof __propDef.events;
export type IssueReopenedSlots = typeof __propDef.slots;
export default class IssueReopened extends SvelteComponentTyped<IssueReopenedProps, IssueReopenedEvents, IssueReopenedSlots> {
}
export {};
