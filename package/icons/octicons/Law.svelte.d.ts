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
export type LawProps = typeof __propDef.props;
export type LawEvents = typeof __propDef.events;
export type LawSlots = typeof __propDef.slots;
export default class Law extends SvelteComponentTyped<LawProps, LawEvents, LawSlots> {
}
export {};
