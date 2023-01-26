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
export type CommentProps = typeof __propDef.props;
export type CommentEvents = typeof __propDef.events;
export type CommentSlots = typeof __propDef.slots;
export default class Comment extends SvelteComponentTyped<CommentProps, CommentEvents, CommentSlots> {
}
export {};
