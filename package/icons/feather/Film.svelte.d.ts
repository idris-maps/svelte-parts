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
export type FilmProps = typeof __propDef.props;
export type FilmEvents = typeof __propDef.events;
export type FilmSlots = typeof __propDef.slots;
export default class Film extends SvelteComponentTyped<FilmProps, FilmEvents, FilmSlots> {
}
export {};
