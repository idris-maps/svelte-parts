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
export type TasklistProps = typeof __propDef.props;
export type TasklistEvents = typeof __propDef.events;
export type TasklistSlots = typeof __propDef.slots;
export default class Tasklist extends SvelteComponentTyped<TasklistProps, TasklistEvents, TasklistSlots> {
}
export {};
