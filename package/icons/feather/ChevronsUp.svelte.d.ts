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
export type ChevronsUpProps = typeof __propDef.props;
export type ChevronsUpEvents = typeof __propDef.events;
export type ChevronsUpSlots = typeof __propDef.slots;
export default class ChevronsUp extends SvelteComponentTyped<ChevronsUpProps, ChevronsUpEvents, ChevronsUpSlots> {
}
export {};
