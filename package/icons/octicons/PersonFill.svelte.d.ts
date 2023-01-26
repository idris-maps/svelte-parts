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
export type PersonFillProps = typeof __propDef.props;
export type PersonFillEvents = typeof __propDef.events;
export type PersonFillSlots = typeof __propDef.slots;
export default class PersonFill extends SvelteComponentTyped<PersonFillProps, PersonFillEvents, PersonFillSlots> {
}
export {};
