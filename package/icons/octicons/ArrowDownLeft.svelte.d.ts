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
export type ArrowDownLeftProps = typeof __propDef.props;
export type ArrowDownLeftEvents = typeof __propDef.events;
export type ArrowDownLeftSlots = typeof __propDef.slots;
export default class ArrowDownLeft extends SvelteComponentTyped<ArrowDownLeftProps, ArrowDownLeftEvents, ArrowDownLeftSlots> {
}
export {};
