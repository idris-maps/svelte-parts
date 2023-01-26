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
export type CommentDiscussionProps = typeof __propDef.props;
export type CommentDiscussionEvents = typeof __propDef.events;
export type CommentDiscussionSlots = typeof __propDef.slots;
export default class CommentDiscussion extends SvelteComponentTyped<CommentDiscussionProps, CommentDiscussionEvents, CommentDiscussionSlots> {
}
export {};
