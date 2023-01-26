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
export type CafeProps = typeof __propDef.props;
export type CafeEvents = typeof __propDef.events;
export type CafeSlots = typeof __propDef.slots;
export default class Cafe extends SvelteComponentTyped<CafeProps, CafeEvents, CafeSlots> {
}
export {};
