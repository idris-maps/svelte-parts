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
export type SkiingProps = typeof __propDef.props;
export type SkiingEvents = typeof __propDef.events;
export type SkiingSlots = typeof __propDef.slots;
export default class Skiing extends SvelteComponentTyped<SkiingProps, SkiingEvents, SkiingSlots> {
}
export {};
