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
export type PersonAddProps = typeof __propDef.props;
export type PersonAddEvents = typeof __propDef.events;
export type PersonAddSlots = typeof __propDef.slots;
export default class PersonAdd extends SvelteComponentTyped<PersonAddProps, PersonAddEvents, PersonAddSlots> {
}
export {};
