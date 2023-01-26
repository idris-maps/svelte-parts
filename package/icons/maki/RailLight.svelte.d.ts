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
export type RailLightProps = typeof __propDef.props;
export type RailLightEvents = typeof __propDef.events;
export type RailLightSlots = typeof __propDef.slots;
export default class RailLight extends SvelteComponentTyped<RailLightProps, RailLightEvents, RailLightSlots> {
}
export {};
