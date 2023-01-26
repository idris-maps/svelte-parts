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
export type ShuffleProps = typeof __propDef.props;
export type ShuffleEvents = typeof __propDef.events;
export type ShuffleSlots = typeof __propDef.slots;
export default class Shuffle extends SvelteComponentTyped<ShuffleProps, ShuffleEvents, ShuffleSlots> {
}
export {};
