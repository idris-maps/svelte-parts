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
export type SortDescProps = typeof __propDef.props;
export type SortDescEvents = typeof __propDef.events;
export type SortDescSlots = typeof __propDef.slots;
export default class SortDesc extends SvelteComponentTyped<SortDescProps, SortDescEvents, SortDescSlots> {
}
export {};
