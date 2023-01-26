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
export type PencilProps = typeof __propDef.props;
export type PencilEvents = typeof __propDef.events;
export type PencilSlots = typeof __propDef.slots;
export default class Pencil extends SvelteComponentTyped<PencilProps, PencilEvents, PencilSlots> {
}
export {};
