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
export type SchoolJpProps = typeof __propDef.props;
export type SchoolJpEvents = typeof __propDef.events;
export type SchoolJpSlots = typeof __propDef.slots;
export default class SchoolJp extends SvelteComponentTyped<SchoolJpProps, SchoolJpEvents, SchoolJpSlots> {
}
export {};
