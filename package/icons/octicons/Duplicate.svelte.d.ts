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
export type DuplicateProps = typeof __propDef.props;
export type DuplicateEvents = typeof __propDef.events;
export type DuplicateSlots = typeof __propDef.slots;
export default class Duplicate extends SvelteComponentTyped<DuplicateProps, DuplicateEvents, DuplicateSlots> {
}
export {};
