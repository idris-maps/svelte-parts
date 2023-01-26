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
export type YoutubeProps = typeof __propDef.props;
export type YoutubeEvents = typeof __propDef.events;
export type YoutubeSlots = typeof __propDef.slots;
export default class Youtube extends SvelteComponentTyped<YoutubeProps, YoutubeEvents, YoutubeSlots> {
}
export {};
