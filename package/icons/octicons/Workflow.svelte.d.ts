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
export type WorkflowProps = typeof __propDef.props;
export type WorkflowEvents = typeof __propDef.events;
export type WorkflowSlots = typeof __propDef.slots;
export default class Workflow extends SvelteComponentTyped<WorkflowProps, WorkflowEvents, WorkflowSlots> {
}
export {};
