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
export type SlaughterhouseProps = typeof __propDef.props;
export type SlaughterhouseEvents = typeof __propDef.events;
export type SlaughterhouseSlots = typeof __propDef.slots;
export default class Slaughterhouse extends SvelteComponentTyped<SlaughterhouseProps, SlaughterhouseEvents, SlaughterhouseSlots> {
}
export {};
