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
export type RepoPushProps = typeof __propDef.props;
export type RepoPushEvents = typeof __propDef.events;
export type RepoPushSlots = typeof __propDef.slots;
export default class RepoPush extends SvelteComponentTyped<RepoPushProps, RepoPushEvents, RepoPushSlots> {
}
export {};
