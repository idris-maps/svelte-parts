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
export type UnlockProps = typeof __propDef.props;
export type UnlockEvents = typeof __propDef.events;
export type UnlockSlots = typeof __propDef.slots;
export default class Unlock extends SvelteComponentTyped<UnlockProps, UnlockEvents, UnlockSlots> {
}
export {};
