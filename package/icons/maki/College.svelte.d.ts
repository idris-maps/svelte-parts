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
export type CollegeProps = typeof __propDef.props;
export type CollegeEvents = typeof __propDef.events;
export type CollegeSlots = typeof __propDef.slots;
export default class College extends SvelteComponentTyped<CollegeProps, CollegeEvents, CollegeSlots> {
}
export {};
