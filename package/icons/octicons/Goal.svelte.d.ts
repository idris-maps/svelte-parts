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
export type GoalProps = typeof __propDef.props;
export type GoalEvents = typeof __propDef.events;
export type GoalSlots = typeof __propDef.slots;
export default class Goal extends SvelteComponentTyped<GoalProps, GoalEvents, GoalSlots> {
}
export {};
