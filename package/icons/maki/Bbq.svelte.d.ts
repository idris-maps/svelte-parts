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
export type BbqProps = typeof __propDef.props;
export type BbqEvents = typeof __propDef.events;
export type BbqSlots = typeof __propDef.slots;
export default class Bbq extends SvelteComponentTyped<BbqProps, BbqEvents, BbqSlots> {
}
export {};
