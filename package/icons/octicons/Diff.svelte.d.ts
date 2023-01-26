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
export type DiffProps = typeof __propDef.props;
export type DiffEvents = typeof __propDef.events;
export type DiffSlots = typeof __propDef.slots;
export default class Diff extends SvelteComponentTyped<DiffProps, DiffEvents, DiffSlots> {
}
export {};
