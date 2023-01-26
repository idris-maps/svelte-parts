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
export type RotateCwProps = typeof __propDef.props;
export type RotateCwEvents = typeof __propDef.events;
export type RotateCwSlots = typeof __propDef.slots;
export default class RotateCw extends SvelteComponentTyped<RotateCwProps, RotateCwEvents, RotateCwSlots> {
}
export {};
