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
export type ZapProps = typeof __propDef.props;
export type ZapEvents = typeof __propDef.events;
export type ZapSlots = typeof __propDef.slots;
export default class Zap extends SvelteComponentTyped<ZapProps, ZapEvents, ZapSlots> {
}
export {};
