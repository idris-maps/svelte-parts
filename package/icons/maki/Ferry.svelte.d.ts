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
export type FerryProps = typeof __propDef.props;
export type FerryEvents = typeof __propDef.events;
export type FerrySlots = typeof __propDef.slots;
export default class Ferry extends SvelteComponentTyped<FerryProps, FerryEvents, FerrySlots> {
}
export {};
