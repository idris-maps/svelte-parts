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
export type ThumbsDownProps = typeof __propDef.props;
export type ThumbsDownEvents = typeof __propDef.events;
export type ThumbsDownSlots = typeof __propDef.slots;
export default class ThumbsDown extends SvelteComponentTyped<ThumbsDownProps, ThumbsDownEvents, ThumbsDownSlots> {
}
export {};
