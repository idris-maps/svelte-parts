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
export type MoreVerticalProps = typeof __propDef.props;
export type MoreVerticalEvents = typeof __propDef.events;
export type MoreVerticalSlots = typeof __propDef.slots;
export default class MoreVertical extends SvelteComponentTyped<MoreVerticalProps, MoreVerticalEvents, MoreVerticalSlots> {
}
export {};
