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
export type KaraokeProps = typeof __propDef.props;
export type KaraokeEvents = typeof __propDef.events;
export type KaraokeSlots = typeof __propDef.slots;
export default class Karaoke extends SvelteComponentTyped<KaraokeProps, KaraokeEvents, KaraokeSlots> {
}
export {};
