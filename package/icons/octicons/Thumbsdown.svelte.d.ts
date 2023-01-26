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
export type ThumbsdownProps = typeof __propDef.props;
export type ThumbsdownEvents = typeof __propDef.events;
export type ThumbsdownSlots = typeof __propDef.slots;
export default class Thumbsdown extends SvelteComponentTyped<ThumbsdownProps, ThumbsdownEvents, ThumbsdownSlots> {
}
export {};
