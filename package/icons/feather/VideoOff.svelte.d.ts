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
export type VideoOffProps = typeof __propDef.props;
export type VideoOffEvents = typeof __propDef.events;
export type VideoOffSlots = typeof __propDef.slots;
export default class VideoOff extends SvelteComponentTyped<VideoOffProps, VideoOffEvents, VideoOffSlots> {
}
export {};
