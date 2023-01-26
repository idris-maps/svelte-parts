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
export type LoaderProps = typeof __propDef.props;
export type LoaderEvents = typeof __propDef.events;
export type LoaderSlots = typeof __propDef.slots;
export default class Loader extends SvelteComponentTyped<LoaderProps, LoaderEvents, LoaderSlots> {
}
export {};
