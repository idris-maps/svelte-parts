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
export type ShieldLockProps = typeof __propDef.props;
export type ShieldLockEvents = typeof __propDef.events;
export type ShieldLockSlots = typeof __propDef.slots;
export default class ShieldLock extends SvelteComponentTyped<ShieldLockProps, ShieldLockEvents, ShieldLockSlots> {
}
export {};
