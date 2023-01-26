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
export type PlusProps = typeof __propDef.props;
export type PlusEvents = typeof __propDef.events;
export type PlusSlots = typeof __propDef.slots;
export default class Plus extends SvelteComponentTyped<PlusProps, PlusEvents, PlusSlots> {
}
export {};
