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
export type CinemaProps = typeof __propDef.props;
export type CinemaEvents = typeof __propDef.events;
export type CinemaSlots = typeof __propDef.slots;
export default class Cinema extends SvelteComponentTyped<CinemaProps, CinemaEvents, CinemaSlots> {
}
export {};
