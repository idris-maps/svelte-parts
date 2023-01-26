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
export type GamingProps = typeof __propDef.props;
export type GamingEvents = typeof __propDef.events;
export type GamingSlots = typeof __propDef.slots;
export default class Gaming extends SvelteComponentTyped<GamingProps, GamingEvents, GamingSlots> {
}
export {};
