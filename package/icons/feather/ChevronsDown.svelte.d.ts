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
export type ChevronsDownProps = typeof __propDef.props;
export type ChevronsDownEvents = typeof __propDef.events;
export type ChevronsDownSlots = typeof __propDef.slots;
export default class ChevronsDown extends SvelteComponentTyped<ChevronsDownProps, ChevronsDownEvents, ChevronsDownSlots> {
}
export {};
