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
export type BookmarkProps = typeof __propDef.props;
export type BookmarkEvents = typeof __propDef.events;
export type BookmarkSlots = typeof __propDef.slots;
export default class Bookmark extends SvelteComponentTyped<BookmarkProps, BookmarkEvents, BookmarkSlots> {
}
export {};
