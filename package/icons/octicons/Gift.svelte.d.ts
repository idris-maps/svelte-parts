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
export type GiftProps = typeof __propDef.props;
export type GiftEvents = typeof __propDef.events;
export type GiftSlots = typeof __propDef.slots;
export default class Gift extends SvelteComponentTyped<GiftProps, GiftEvents, GiftSlots> {
}
export {};
