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
export type PaintProps = typeof __propDef.props;
export type PaintEvents = typeof __propDef.events;
export type PaintSlots = typeof __propDef.slots;
export default class Paint extends SvelteComponentTyped<PaintProps, PaintEvents, PaintSlots> {
}
export {};
