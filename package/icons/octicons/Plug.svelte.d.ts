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
export type PlugProps = typeof __propDef.props;
export type PlugEvents = typeof __propDef.events;
export type PlugSlots = typeof __propDef.slots;
export default class Plug extends SvelteComponentTyped<PlugProps, PlugEvents, PlugSlots> {
}
export {};
