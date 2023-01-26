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
export type LifeBuoyProps = typeof __propDef.props;
export type LifeBuoyEvents = typeof __propDef.events;
export type LifeBuoySlots = typeof __propDef.slots;
export default class LifeBuoy extends SvelteComponentTyped<LifeBuoyProps, LifeBuoyEvents, LifeBuoySlots> {
}
export {};
