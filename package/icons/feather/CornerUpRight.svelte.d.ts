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
export type CornerUpRightProps = typeof __propDef.props;
export type CornerUpRightEvents = typeof __propDef.events;
export type CornerUpRightSlots = typeof __propDef.slots;
export default class CornerUpRight extends SvelteComponentTyped<CornerUpRightProps, CornerUpRightEvents, CornerUpRightSlots> {
}
export {};
