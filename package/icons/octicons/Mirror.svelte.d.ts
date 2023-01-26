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
export type MirrorProps = typeof __propDef.props;
export type MirrorEvents = typeof __propDef.events;
export type MirrorSlots = typeof __propDef.slots;
export default class Mirror extends SvelteComponentTyped<MirrorProps, MirrorEvents, MirrorSlots> {
}
export {};
