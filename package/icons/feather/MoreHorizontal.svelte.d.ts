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
export type MoreHorizontalProps = typeof __propDef.props;
export type MoreHorizontalEvents = typeof __propDef.events;
export type MoreHorizontalSlots = typeof __propDef.slots;
export default class MoreHorizontal extends SvelteComponentTyped<MoreHorizontalProps, MoreHorizontalEvents, MoreHorizontalSlots> {
}
export {};
