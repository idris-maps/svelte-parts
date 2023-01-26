import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        multiple?: boolean | undefined;
        onDrop: (files: File[]) => void;
        onEnter?: (() => void) | undefined;
        onLeave?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
