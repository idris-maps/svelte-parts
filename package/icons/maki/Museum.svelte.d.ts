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
export type MuseumProps = typeof __propDef.props;
export type MuseumEvents = typeof __propDef.events;
export type MuseumSlots = typeof __propDef.slots;
export default class Museum extends SvelteComponentTyped<MuseumProps, MuseumEvents, MuseumSlots> {
}
export {};
