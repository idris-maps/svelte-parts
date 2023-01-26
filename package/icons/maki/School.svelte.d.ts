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
export type SchoolProps = typeof __propDef.props;
export type SchoolEvents = typeof __propDef.events;
export type SchoolSlots = typeof __propDef.slots;
export default class School extends SvelteComponentTyped<SchoolProps, SchoolEvents, SchoolSlots> {
}
export {};
