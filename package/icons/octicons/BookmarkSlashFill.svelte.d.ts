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
export type BookmarkSlashFillProps = typeof __propDef.props;
export type BookmarkSlashFillEvents = typeof __propDef.events;
export type BookmarkSlashFillSlots = typeof __propDef.slots;
export default class BookmarkSlashFill extends SvelteComponentTyped<BookmarkSlashFillProps, BookmarkSlashFillEvents, BookmarkSlashFillSlots> {
}
export {};
