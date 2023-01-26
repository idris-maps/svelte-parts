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
export type BowlingAlleyProps = typeof __propDef.props;
export type BowlingAlleyEvents = typeof __propDef.events;
export type BowlingAlleySlots = typeof __propDef.slots;
export default class BowlingAlley extends SvelteComponentTyped<BowlingAlleyProps, BowlingAlleyEvents, BowlingAlleySlots> {
}
export {};
