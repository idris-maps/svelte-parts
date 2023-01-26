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
export type AlignLeftProps = typeof __propDef.props;
export type AlignLeftEvents = typeof __propDef.events;
export type AlignLeftSlots = typeof __propDef.slots;
export default class AlignLeft extends SvelteComponentTyped<AlignLeftProps, AlignLeftEvents, AlignLeftSlots> {
}
export {};
