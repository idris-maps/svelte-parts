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
export type UnfoldProps = typeof __propDef.props;
export type UnfoldEvents = typeof __propDef.events;
export type UnfoldSlots = typeof __propDef.slots;
export default class Unfold extends SvelteComponentTyped<UnfoldProps, UnfoldEvents, UnfoldSlots> {
}
export {};
