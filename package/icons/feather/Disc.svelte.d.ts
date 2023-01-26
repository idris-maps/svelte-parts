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
export type DiscProps = typeof __propDef.props;
export type DiscEvents = typeof __propDef.events;
export type DiscSlots = typeof __propDef.slots;
export default class Disc extends SvelteComponentTyped<DiscProps, DiscEvents, DiscSlots> {
}
export {};
