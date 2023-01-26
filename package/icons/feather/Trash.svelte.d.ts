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
export type TrashProps = typeof __propDef.props;
export type TrashEvents = typeof __propDef.events;
export type TrashSlots = typeof __propDef.slots;
export default class Trash extends SvelteComponentTyped<TrashProps, TrashEvents, TrashSlots> {
}
export {};
