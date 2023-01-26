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
export type MilestoneProps = typeof __propDef.props;
export type MilestoneEvents = typeof __propDef.events;
export type MilestoneSlots = typeof __propDef.slots;
export default class Milestone extends SvelteComponentTyped<MilestoneProps, MilestoneEvents, MilestoneSlots> {
}
export {};
