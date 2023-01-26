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
export type CornerRightDownProps = typeof __propDef.props;
export type CornerRightDownEvents = typeof __propDef.events;
export type CornerRightDownSlots = typeof __propDef.slots;
export default class CornerRightDown extends SvelteComponentTyped<CornerRightDownProps, CornerRightDownEvents, CornerRightDownSlots> {
}
export {};
