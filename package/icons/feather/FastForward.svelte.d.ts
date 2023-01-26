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
export type FastForwardProps = typeof __propDef.props;
export type FastForwardEvents = typeof __propDef.events;
export type FastForwardSlots = typeof __propDef.slots;
export default class FastForward extends SvelteComponentTyped<FastForwardProps, FastForwardEvents, FastForwardSlots> {
}
export {};
