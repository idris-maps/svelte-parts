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
export type RotateCcwProps = typeof __propDef.props;
export type RotateCcwEvents = typeof __propDef.events;
export type RotateCcwSlots = typeof __propDef.slots;
export default class RotateCcw extends SvelteComponentTyped<RotateCcwProps, RotateCcwEvents, RotateCcwSlots> {
}
export {};
