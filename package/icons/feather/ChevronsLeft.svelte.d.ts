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
export type ChevronsLeftProps = typeof __propDef.props;
export type ChevronsLeftEvents = typeof __propDef.events;
export type ChevronsLeftSlots = typeof __propDef.slots;
export default class ChevronsLeft extends SvelteComponentTyped<ChevronsLeftProps, ChevronsLeftEvents, ChevronsLeftSlots> {
}
export {};
