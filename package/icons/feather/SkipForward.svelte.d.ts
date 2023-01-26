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
export type SkipForwardProps = typeof __propDef.props;
export type SkipForwardEvents = typeof __propDef.events;
export type SkipForwardSlots = typeof __propDef.slots;
export default class SkipForward extends SvelteComponentTyped<SkipForwardProps, SkipForwardEvents, SkipForwardSlots> {
}
export {};
