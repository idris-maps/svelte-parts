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
export type ArrowUpLeftProps = typeof __propDef.props;
export type ArrowUpLeftEvents = typeof __propDef.events;
export type ArrowUpLeftSlots = typeof __propDef.slots;
export default class ArrowUpLeft extends SvelteComponentTyped<ArrowUpLeftProps, ArrowUpLeftEvents, ArrowUpLeftSlots> {
}
export {};
