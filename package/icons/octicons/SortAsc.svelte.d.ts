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
export type SortAscProps = typeof __propDef.props;
export type SortAscEvents = typeof __propDef.events;
export type SortAscSlots = typeof __propDef.slots;
export default class SortAsc extends SvelteComponentTyped<SortAscProps, SortAscEvents, SortAscSlots> {
}
export {};
