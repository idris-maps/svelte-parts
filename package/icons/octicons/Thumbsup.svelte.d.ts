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
export type ThumbsupProps = typeof __propDef.props;
export type ThumbsupEvents = typeof __propDef.events;
export type ThumbsupSlots = typeof __propDef.slots;
export default class Thumbsup extends SvelteComponentTyped<ThumbsupProps, ThumbsupEvents, ThumbsupSlots> {
}
export {};
