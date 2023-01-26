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
export type CollegeJpProps = typeof __propDef.props;
export type CollegeJpEvents = typeof __propDef.events;
export type CollegeJpSlots = typeof __propDef.slots;
export default class CollegeJp extends SvelteComponentTyped<CollegeJpProps, CollegeJpEvents, CollegeJpSlots> {
}
export {};
