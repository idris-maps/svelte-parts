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
export type PenToolProps = typeof __propDef.props;
export type PenToolEvents = typeof __propDef.events;
export type PenToolSlots = typeof __propDef.slots;
export default class PenTool extends SvelteComponentTyped<PenToolProps, PenToolEvents, PenToolSlots> {
}
export {};
