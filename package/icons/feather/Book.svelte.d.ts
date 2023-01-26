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
export type BookProps = typeof __propDef.props;
export type BookEvents = typeof __propDef.events;
export type BookSlots = typeof __propDef.slots;
export default class Book extends SvelteComponentTyped<BookProps, BookEvents, BookSlots> {
}
export {};
