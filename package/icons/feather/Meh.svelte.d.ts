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
export type MehProps = typeof __propDef.props;
export type MehEvents = typeof __propDef.events;
export type MehSlots = typeof __propDef.slots;
export default class Meh extends SvelteComponentTyped<MehProps, MehEvents, MehSlots> {
}
export {};
