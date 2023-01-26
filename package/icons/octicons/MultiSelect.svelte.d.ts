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
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
export default class MultiSelect extends SvelteComponentTyped<MultiSelectProps, MultiSelectEvents, MultiSelectSlots> {
}
export {};
