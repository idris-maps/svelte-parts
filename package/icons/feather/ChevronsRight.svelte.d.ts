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
export type ChevronsRightProps = typeof __propDef.props;
export type ChevronsRightEvents = typeof __propDef.events;
export type ChevronsRightSlots = typeof __propDef.slots;
export default class ChevronsRight extends SvelteComponentTyped<ChevronsRightProps, ChevronsRightEvents, ChevronsRightSlots> {
}
export {};
