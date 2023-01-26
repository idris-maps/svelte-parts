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
export type GlobeProps = typeof __propDef.props;
export type GlobeEvents = typeof __propDef.events;
export type GlobeSlots = typeof __propDef.slots;
export default class Globe extends SvelteComponentTyped<GlobeProps, GlobeEvents, GlobeSlots> {
}
export {};
