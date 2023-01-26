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
export type AlignJustifyProps = typeof __propDef.props;
export type AlignJustifyEvents = typeof __propDef.events;
export type AlignJustifySlots = typeof __propDef.slots;
export default class AlignJustify extends SvelteComponentTyped<AlignJustifyProps, AlignJustifyEvents, AlignJustifySlots> {
}
export {};
