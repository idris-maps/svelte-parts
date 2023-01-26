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
export type PeopleProps = typeof __propDef.props;
export type PeopleEvents = typeof __propDef.events;
export type PeopleSlots = typeof __propDef.slots;
export default class People extends SvelteComponentTyped<PeopleProps, PeopleEvents, PeopleSlots> {
}
export {};
