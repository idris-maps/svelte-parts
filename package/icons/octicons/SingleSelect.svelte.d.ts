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
export type SingleSelectProps = typeof __propDef.props;
export type SingleSelectEvents = typeof __propDef.events;
export type SingleSelectSlots = typeof __propDef.slots;
export default class SingleSelect extends SvelteComponentTyped<SingleSelectProps, SingleSelectEvents, SingleSelectSlots> {
}
export {};
