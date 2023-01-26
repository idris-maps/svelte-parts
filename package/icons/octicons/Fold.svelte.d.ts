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
export type FoldProps = typeof __propDef.props;
export type FoldEvents = typeof __propDef.events;
export type FoldSlots = typeof __propDef.slots;
export default class Fold extends SvelteComponentTyped<FoldProps, FoldEvents, FoldSlots> {
}
export {};
