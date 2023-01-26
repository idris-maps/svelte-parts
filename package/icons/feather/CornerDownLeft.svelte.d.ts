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
export type CornerDownLeftProps = typeof __propDef.props;
export type CornerDownLeftEvents = typeof __propDef.events;
export type CornerDownLeftSlots = typeof __propDef.slots;
export default class CornerDownLeft extends SvelteComponentTyped<CornerDownLeftProps, CornerDownLeftEvents, CornerDownLeftSlots> {
}
export {};
