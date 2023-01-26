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
export type ZapOffProps = typeof __propDef.props;
export type ZapOffEvents = typeof __propDef.events;
export type ZapOffSlots = typeof __propDef.slots;
export default class ZapOff extends SvelteComponentTyped<ZapOffProps, ZapOffEvents, ZapOffSlots> {
}
export {};
