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
export type VideoProps = typeof __propDef.props;
export type VideoEvents = typeof __propDef.events;
export type VideoSlots = typeof __propDef.slots;
export default class Video extends SvelteComponentTyped<VideoProps, VideoEvents, VideoSlots> {
}
export {};
