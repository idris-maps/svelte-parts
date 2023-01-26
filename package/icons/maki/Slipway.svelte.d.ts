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
export type SlipwayProps = typeof __propDef.props;
export type SlipwayEvents = typeof __propDef.events;
export type SlipwaySlots = typeof __propDef.slots;
export default class Slipway extends SvelteComponentTyped<SlipwayProps, SlipwayEvents, SlipwaySlots> {
}
export {};
