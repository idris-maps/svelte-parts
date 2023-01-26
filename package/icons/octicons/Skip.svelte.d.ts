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
export type SkipProps = typeof __propDef.props;
export type SkipEvents = typeof __propDef.events;
export type SkipSlots = typeof __propDef.slots;
export default class Skip extends SvelteComponentTyped<SkipProps, SkipEvents, SkipSlots> {
}
export {};
