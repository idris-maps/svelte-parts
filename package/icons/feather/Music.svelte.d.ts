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
export type MusicProps = typeof __propDef.props;
export type MusicEvents = typeof __propDef.events;
export type MusicSlots = typeof __propDef.slots;
export default class Music extends SvelteComponentTyped<MusicProps, MusicEvents, MusicSlots> {
}
export {};
