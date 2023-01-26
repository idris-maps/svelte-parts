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
export type PlayCircleProps = typeof __propDef.props;
export type PlayCircleEvents = typeof __propDef.events;
export type PlayCircleSlots = typeof __propDef.slots;
export default class PlayCircle extends SvelteComponentTyped<PlayCircleProps, PlayCircleEvents, PlayCircleSlots> {
}
export {};
