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
export type CricketProps = typeof __propDef.props;
export type CricketEvents = typeof __propDef.events;
export type CricketSlots = typeof __propDef.slots;
export default class Cricket extends SvelteComponentTyped<CricketProps, CricketEvents, CricketSlots> {
}
export {};
