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
export type BookmarkSlashProps = typeof __propDef.props;
export type BookmarkSlashEvents = typeof __propDef.events;
export type BookmarkSlashSlots = typeof __propDef.slots;
export default class BookmarkSlash extends SvelteComponentTyped<BookmarkSlashProps, BookmarkSlashEvents, BookmarkSlashSlots> {
}
export {};
