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
export type CornerUpLeftProps = typeof __propDef.props;
export type CornerUpLeftEvents = typeof __propDef.events;
export type CornerUpLeftSlots = typeof __propDef.slots;
export default class CornerUpLeft extends SvelteComponentTyped<CornerUpLeftProps, CornerUpLeftEvents, CornerUpLeftSlots> {
}
export {};
