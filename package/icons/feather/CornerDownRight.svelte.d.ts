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
export type CornerDownRightProps = typeof __propDef.props;
export type CornerDownRightEvents = typeof __propDef.events;
export type CornerDownRightSlots = typeof __propDef.slots;
export default class CornerDownRight extends SvelteComponentTyped<CornerDownRightProps, CornerDownRightEvents, CornerDownRightSlots> {
}
export {};
