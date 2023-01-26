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
export type FoldDownProps = typeof __propDef.props;
export type FoldDownEvents = typeof __propDef.events;
export type FoldDownSlots = typeof __propDef.slots;
export default class FoldDown extends SvelteComponentTyped<FoldDownProps, FoldDownEvents, FoldDownSlots> {
}
export {};
