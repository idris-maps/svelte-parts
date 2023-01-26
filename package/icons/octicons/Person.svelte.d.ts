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
export type PersonProps = typeof __propDef.props;
export type PersonEvents = typeof __propDef.events;
export type PersonSlots = typeof __propDef.slots;
export default class Person extends SvelteComponentTyped<PersonProps, PersonEvents, PersonSlots> {
}
export {};
